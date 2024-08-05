import React from 'react'
import './Announcements.css';

import drowd from "../components/drowd.svg";
export const Announcements1 = ({ heading3, date, image }) => {
  return (
    <div className="ann-1" >
      <div className="ann-1-label" >
        {heading3}
      </div>
      <div className="ann-1-label2" >
        <div className="ann-11-label">{date}
        </div>
        <div className="ann-11-label1">
          <img src={drowd} alt="..."></img>
        </div>
      </div>
    </div>
  )
}
