import React, { useState } from "react";
import "./VerticalProgressBar.css";

const VerticalProgressBar = (props) => {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundColor: props.barColor,
    width: props.percentage + "%",
    transition: hover ? "width 0.6s ease-out" : "width 1s ease-in"
  };

  return (
    <div className="progress-bar-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="progress-bar-title">{props.title}</div>
      <div className="progress-bar-background">
        <div className="progress-bar-foreground" style={style}>
          <div className="icon-container">
            <i className={props.icon}></i>
            <span className="percentage">{props.percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalProgressBar;
