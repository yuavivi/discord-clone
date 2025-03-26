import React, { useRef, useState } from "react";
import "../../css/Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

import { SidebarChannel } from "./SidebarChannel";
import Setting from "./Setting";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useClickOutside } from "../../features/useClickOutSide";

const Sidebar = () => {
  //#region 定義
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const settingModal = useRef<HTMLDivElement | null>(null);
  //#endregion

  // モジュール外をクリックしたら閉じる
  useClickOutside(settingModal, () => setIsSettingVisible(false));

  const handleSettingClick = () => {
    setIsSettingVisible(!isSettingVisible);
  };

  const user = useAppSelector((state) => state.user);

  const getUserName = (): string => {
    const userName: string | undefined = user?.displayName;
    if (userName) {
      if (userName.length > 10) return userName.slice(0, 10) + "...";
      return userName;
    }
    return "unknown";
  };

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="sidebarDiscordIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="sidebarIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelHeader">
            <ExpandMoreIcon />
            <div className="sidebarHeader">
              <h4>テキストチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
          <div className="sidebarChannelHeader">
            <ExpandMoreIcon />
            <div className="sidebarHeader">
              <h4>ボイスチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img src={user?.userIcon} alt="" />
            <div className="accountInfo">
              <h4>{getUserName()}</h4>
              <span>#{user?.userId.substring(0, 4)}</span>
            </div>
          </div>
          {isSettingVisible && (
            <div ref={settingModal}>
              <Setting />
            </div>
          )}
          <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon onClick={handleSettingClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
