import React from "react";
import './UpcomingSchedule.css';

import scroll from "../components/scroll.svg";

export const Tasks = ({ question4, calender }) => {
  return (
    <div className="up-frame" >
      <div className="up-frame-1" >
        <div className="question1" >
          {question4}
        </div>
        <div className="question1-time" >
          {calender}
        </div>
      </div>
      <div className="scro">
        <img src={scroll} alt="..."></img>
      </div>
    </div>
  );
};