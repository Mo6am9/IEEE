import React, { useEffect, useState, useRef } from "react";
import Instiutes from "./Iistiutes/Instiutes";
import { motion } from "framer-motion";
function App() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [isVisible, setisVisible] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!animationPlayed && overlayRef.current) {
      for (let i = 0; i < 100; i++) {
        const cube = document.createElement("div");
        cube.className = "cube";
        cube.style.animationDelay = `${i * 0.05}s`;
        overlayRef.current.appendChild(cube);
      }
      setAnimationPlayed(true);
    }
  }, [animationPlayed]);

  useEffect(() => {
    const tyime = setTimeout(() => {
      setisVisible(true);
    }, 1000);
    return () => clearTimeout(tyime);
  }, []);
  useEffect(() => {
    const handleCursor = (e) => {
      setx(e.clientX);
      sety(e.clientY);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  return (
    <React.StrictMode>
      <svg>
        <filter id="goey">
          <feGaussianBlur id="SourceGraphic" stdDeviation={10} />
          <feColorMatrix
            values="
            1 0 0 0 0 
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
            "
          ></feColorMatrix>
        </filter>
      </svg>
      <motion.div
        className="cursor"
        animate={{
          x: x,
          y: y,
        }}
      ></motion.div>
      {isVisible ? (
        <Instiutes />
      ) : (
        <section className="open-animation">
          <div className="loder">
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <span style={{ "--i": 4 }}></span>
            <span style={{ "--i": 5 }}></span>
            <span style={{ "--i": 6 }}></span>
            <span style={{ "--i": 7 }}></span>
            <span style={{ "--i": 8 }}></span>
            <span className="rotate" style={{ "--j": 0 }}></span>
            <span className="rotate" style={{ "--j": 1 }}></span>
            <span className="rotate" style={{ "--j": 2 }}></span>
            <span className="rotate" style={{ "--j": 3 }}></span>
            <span className="rotate" style={{ "--j": 4 }}></span>
          </div>
        </section>
      )}
    </React.StrictMode>
  );
}

export default App;

// Be part of an organization dedicated to advancing technology for the benefit of humanity
