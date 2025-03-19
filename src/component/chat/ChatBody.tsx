import React from "react";
import "../../css/ChatBody.scss";
import { ChatHeader } from "./ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./ChatMessage";

export const ChatBody = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className="chatInput">
        <AddCircleIcon />
        <form>
          <textarea name="message" placeholder="メッセージを入力..." />
          <button type="submit" className="chatSendButton">
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifBoxIcon />
          <TextSnippetIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
