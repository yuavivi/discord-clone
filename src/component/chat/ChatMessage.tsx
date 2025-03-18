import React from "react";
import "../../css/ChatMessage.scss";
import { Avatar } from "@mui/material";

export const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Name
          <span className="messageTimestamp">2025/03/18</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};
export default ChatMessage;
