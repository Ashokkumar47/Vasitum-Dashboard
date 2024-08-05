
import React from "react";
import './UpcomingSchedule.css';
import imgdropdown from "../components/drowd.svg";


import { Tasks } from "./Tasks";
 const UpcomingSchedule = ({ date2, question4, calender, heading3, image }) => {
  return (
    <div className="upcoming-frame" >
      <div className="upcoming-label1" >
        <div className="up-label11" >
          Upcoming Schedule
        </div>
        <div className="up-label12" >
          <div className="up-label13" >
            {/* {date2} */} Today, 13 Sep 2021
          </div>
          <div className="up-label-date">
            <img src={imgdropdown} alt="..."></img>
          </div>
        </div>
      </div>
      <div className="pri-label" >
        Priority
      </div>
      <Tasks
        question4="Review Candidate Applications"
        calender="Today 11:30 AM"
      />
      <div className="pri-label" >
        Other
      </div>
      <Tasks
        question4="Interview with candidates"
        calender="Today-10:30 AM"
      />
      <div className="bcd">
        <Tasks
          question4="Short Meeting with Product designer from IT"
          calender="Today-09:15 AM"
        />
      </div>
      
      <div classname="secondbutton-div">
        <button className="btn2">Create a New Schedule</button>
      </div>
    </div>
  );
};
export default UpcomingSchedule;