import React from "react";
import { useLocation } from "react-router-dom";

import SiteNavbar from "../../components/Navbar";

import "./VideoDetails.css";

export default function VideoDetails(props) {
  const { state } = useLocation();
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <div>
        <h2>Title: {state[0].items[0].snippet.title}</h2>
        <h4>Channel: {state[0].items[0].snippet.channelTitle}</h4>
        <div>
          <ol>
            <h5>Comments:</h5>
            {state[1].items.map((item) => (
              <li key={item.id}>
                {item.snippet.topLevelComment.snippet.authorDisplayName}:{" "}
                {item.snippet.topLevelComment.snippet.textOriginal}
                <ol>
                  {item.replies !== "undefined" &&
                    item.replies?.comments.map((comment) => (
                      <li key={comment.id}>
                        {comment.snippet.authorDisplayName}:{" "}
                        {comment.snippet.textOriginal}
                      </li>
                    ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
