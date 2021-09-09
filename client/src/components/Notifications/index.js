import React from "react";
import { useSocket } from "../../context/SocketContext";
import "./index.scss";

const Notifications = () => {
  const { answercall, call, callAccepted } = useSocket();

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className="notification-container">
          <h1>{call.name} is calling:</h1>
          <button onClick={answercall}>Answer</button>
        </div>
      )}{" "}
    </>
  );
};

export default Notifications;
