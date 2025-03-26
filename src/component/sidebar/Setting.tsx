import React from "react";
import "../../css/Setting.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { authentication } from "../../firebase";
// import { useAppDispatch } from "../../hooks/useAppDispatch";
// import { logout } from "../../features/useSlice";

function Setting() {
  const logout = () => {
    authentication.signOut().then(() => {
        localStorage.clear();
        sessionStorage.clear();
        indexedDB.databases().then((databases) => {
          databases.forEach((db) => indexedDB.deleteDatabase(db.name as string)); // IndexedDBを削除
        });
        window.location.reload();
        console.log(localStorage);
    });
  };
  return (
    <div className="settingList">
      <li>言語</li>
      <li className="logoutText" onClick={logout}>
        ログアウト
      </li>
      <div className="settingListFooter">
        <InstagramIcon />
        <FacebookIcon />
        <XIcon />
      </div>
    </div>
  );
}

export default Setting;
