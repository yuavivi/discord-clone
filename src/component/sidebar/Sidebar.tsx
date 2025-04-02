import React, { useEffect, useRef, useState } from "react";
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
import {
  collection,
  onSnapshot,
  query,
  DocumentData,
} from "firebase/firestore";
import { dataBase } from "../../firebase";
import { channel } from "diagnostics_channel";

const Sidebar = () => {
  //#region 定義
  const [isSettingVisible, setIsSettingVisible] = useState<boolean>(false);
  const [isHoveredUserName, setIsHoveredUserName] = useState<boolean>(false);
  const settingModal = useRef<HTMLDivElement | null>(null);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const [isHiddenDiscordTab, setIsHiddenDiscordTab] = useState<boolean>(false);
  const [channels, setChannels] = useState<Channel[]>([]);

  interface Channel {
    id: string;
    channel: DocumentData;
  }
  //#endregion

  const channelsQuery = query(collection(dataBase, "channels"));
  useEffect(() => {
    onSnapshot(channelsQuery, (querySnapshot) => {
      const channelsResults: Channel[] = [];
      querySnapshot.docs.forEach((document) =>
        channelsResults.push({
          id: document.id,
          channel: document.data(),
        })
      );
      setChannels(channelsResults);
    });
  });

  // userName取得
  const user = useAppSelector((state) => state.user);
  const getUserName = (): string => {
    const userName: string | undefined = user?.displayName;
    if (userName) {
      if (userName.length > 10) return userName.slice(0, 10) + "...";
      return userName;
    }
    return "unknown";
  };

  // userNameにカーソルを当てたら名前をフル表示
  const userNameMouseEnter = () => {
    const timer = setTimeout(() => {
      setIsHoveredUserName(true);
    }, 1000);
    setHoverTimer(timer);
  };
  // userNameからカーソルを外したら表示を中止
  const userNameMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    setIsHoveredUserName(false);
  };

  // 設定アイコンクリック時
  const handleSettingClick = () => {
    setIsSettingVisible(!isSettingVisible);
  };
  // 設定リストのモジュール外をクリックしたら閉じる
  useClickOutside(settingModal, () => setIsSettingVisible(false));

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
          <div onClick={() => setIsHiddenDiscordTab(!isHiddenDiscordTab)}>
            <ExpandMoreIcon />
          </div>
        </div>
        {/* sidebarChannels */}
        <div
          className={`sidebarChannels ${isHiddenDiscordTab ? "active" : ""}`}
        >
          <div className="sidebarChannelHeader">
            <ExpandMoreIcon className="expandMoreIcon" />
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
          {/* <div className="sidebarChannelHeader">
              <ExpandMoreIcon className="expandMoreIcon" />
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
            </div> */}
        </div>
        <div className="sidebarFooter">
          {isHoveredUserName && (
            <div className="userFullName">{user?.displayName}</div>
          )}
          <div className="sidebarAccount">
            <img src={user?.userIcon} alt="" />

            <div className="accountInfo">
              <div
                className="userName"
                onMouseEnter={() => userNameMouseEnter()}
                onMouseLeave={() => userNameMouseLeave()}
              >
                <p>{getUserName()}</p>
              </div>

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
