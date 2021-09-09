import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import { SocketProvider } from "./context/SocketContext";
import "./App.scss";

const App = () => {
  return (
    <div className="parent-container">
      <SocketProvider>
        <div className="app-bar">Video Chat App</div>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </SocketProvider>
    </div>
  );
};

export default App;
