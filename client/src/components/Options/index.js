import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Call, HangUp } from "../../assets/icons";
import { useSocket } from "../../context/SocketContext";
import "./index.scss";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useSocket();

  const [idToCall, setIdToCall] = useState("");

  // console.log(idToCall);

  return (
    <div className="options-container">
      <div className="paper-container">
        <form className="form" noValidate autoComplete="off">
          <div className="grid-container">
            <div className="info-container">
              <h3>Account Info</h3>
              <input
                type="text"
                value={name}
                className="text-field"
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me} className="">
                <button type="button"> Copy Your ID</button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="grid-container">
            <div className="info-container">
              <h3>Make a call</h3>
              <input
                type="text"
                value={idToCall}
                className="text-field"
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <button
                  type="button"
                  className="option-btn"
                  onClick={leaveCall}
                >
                  {" "}
                  <HangUp />
                  <p>Hang Up</p>
                  {/* immediately calling function and assigning the return value to onClick */}
                  {/* call after render */}
                  {/* wrong if there is no return value from this function */}
                </button>
              ) : (
                <button
                  type="button"
                  className="option-btn"
                  onClick={() => callUser(idToCall)}
                >
                  {" "}
                  <Call />
                  <p className="call">Call </p>
                  {/* its necessary to call it like callback because only then it waits for onClick = assignin function to onClick*/}
                  {/* call only on click */}
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Options;
