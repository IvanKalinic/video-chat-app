import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

import "./App.scss";

const App = () => {
  return (
    <div className="parent-container">
      <div className="app-bar">Video Chat App</div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
