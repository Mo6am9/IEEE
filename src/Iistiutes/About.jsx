import React, { useEffect, useState ,useRef } from "react";
import "./About.css";
const About = () => {
return (
  <React.StrictMode>
    <div className="About">
      <ul>
        <li><a href="#">Constitution & Bylaws</a></li>
        <li><a href="#">Code of Ethics</a></li>
        <li><a href="#">EMBS Officers</a></li>
        <li><a href="#">Executive Office</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </React.StrictMode>
);
};
export default About;