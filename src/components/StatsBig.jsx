import React from "react";
import "./StatsBig.css";

function StatsBig({ title, count, large, subText,   men, women, imageSrc }) {
  return (
    <div className={`statsBig`} >
      
      <div className="stats-content">
        
        <h3>{title}</h3>
        <h1 className="state-count">{count}</h1>
        <p >{men}</p>
        <p>{women}</p>
        </div>
        <div className="stats-content1">
         
        {imageSrc && <img src={imageSrc} alt={title} className="stats-icon" />}
      </div>
    </div>
  );
}

export default StatsBig;
