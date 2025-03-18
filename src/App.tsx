import React from "react";
import "./App.css";
import Sidebar from "./component/sidebar/Sidebar";
import ChatBody from "./component/chat/ChatBody";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <ChatBody />
    </div>
  );
}

export default App;
