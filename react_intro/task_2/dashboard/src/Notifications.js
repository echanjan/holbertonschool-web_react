import React from "react";
import { getLatestNotification } from "./utils";
import "./Notifications.css";

function Notifications() {

  const handleCloseButtonClick = () => {
    console.log("Close button has been clicked");
  };

  const latestNotificationContent = { __html: getLatestNotification() };

  return (
    <div className="Notifications">
      <p className="text-notifications">Here is the list of notifications</p>

      <ul>
      <li className="default" data-priority="default">New course available</li>
      <li className="urgent" data-priority="urgent">New resume available</li>
      <li className="urgent" data-priority="urgent" dangerouslySetInnerHTML={latestNotificationContent}></li>
      </ul>

      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "#ccc",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
          backgroundColor: "transparent"
        }}
        aria-label="Close"
        onClick={handleCloseButtonClick}
      >
        x
      </button>
    </div>
  );
}

export default Notifications;
