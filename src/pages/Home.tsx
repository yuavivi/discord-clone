import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import ChatBody from "../component/chat/ChatBody";
import "../css/Home.scss"

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <ChatBody />
    </div>
  );
};

export default Home;
