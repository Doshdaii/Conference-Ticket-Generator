import React from "react";
import bg_desktop from "../../src/assets/images/background-desktop.png";
import BackgroundPattern from "../Background/BackgroundPattern";
import "./Wrapper.css";

const Wrapper = ({ children, bg_desktop }) => {
  return (
    <div
      className="main-container"
      style={{ backgroundImage: `url(${bg_desktop})` }}
    >
      <BackgroundPattern />
      <div className="contents">{children}</div>
    </div>
  );
};

export default Wrapper;
