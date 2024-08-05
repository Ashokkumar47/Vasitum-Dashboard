

import React from "react";
import "./Stats.css";

function Stats({ title, count, large, subText, color, background, men, women, imageSrc }) {
  return (
    <div className="stats" style={{ backgroundColor: background }}>
      <div className="stats-content">
        
        <h3>{title}</h3>
        <h4 className="state-count">{count}</h4>
        <h5 style={{ color }}>{subText}</h5>
        {/* <p >{men}</p>
        <p>{women}</p>
        {imageSrc && <img src={imageSrc} alt={title} className="stats-icon" />} */}
      </div>
    </div>
  );
}

export default Stats;
