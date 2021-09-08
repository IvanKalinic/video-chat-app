import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

export const useSocket = () => {
  const socketContext = useContext(SocketContext);
  if (socketContext === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return socketContext;
};
const socket = io("http://localhost:5000");

const SocketProvider = ({ children }) => {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
      });
  });

  const answercall = () => {};

  const callUser = () => {};

  const leaveCall = () => {};
};
