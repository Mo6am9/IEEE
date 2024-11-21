import React, { useEffect, useState ,useRef } from "react";
import "./About.css";
const Awards = () => {
return (
  <React.StrictMode>
    <div className="About Awards">
      <ul>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Society Awards</a></li>
        <li><a href="#">EMBS Officers</a></li>
        <li><a href="#">Fellow Award</a></li>
      </ul>
    </div>
  </React.StrictMode>
);
};
export default Awards;