import React from 'react';


function ProgressBar(props) {
  return (
    <div className="progress-bar-container">
      <label>{props.name}</label>
      <progress className="progress-bar" value={props.percentage} max="100"></progress>
      <div className="percentage">{props.percentage}%</div>
    </div>
  );
}

export default ProgressBar;
