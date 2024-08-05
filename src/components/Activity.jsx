
import React from 'react';
import './Activity.css';

function Activity() {
  return (
    <div className="activity" id="act">
      <div className="activity-header">
        <h2>Recently Activity</h2>
        
      </div>
      <div className="activity-body">
      <p className="pt">10:40 AM, Fri 10 Sept 2021</p>
        <p className="pp">You Posted a New Job</p>
        <p className='ptt'>Kindly check the requirements and terms of work and make sure everything is right.</p>
      </div>
      <div className="activity-footer">
        <p>Today you make 12 activities</p>
        <button className="activity-button">See All Activity</button>
      </div>
    </div>
  );
}

export default Activity;
