
import React from 'react'
import { Announcements1 } from './Announcements1'
import { Announcements2 } from './Announcements2'
import './Announcements.css';

 const Announcements = ({ heading3, date, image, question1, time }) => {
    return (
        <div className="ann" >
            <Announcements1 heading3="Announcement" date="Today, 30 July 2024"  />
            <Announcements2 question1="Outing Schedule for every department" time="5 Minutes ago" />
            <Announcements2 question1="Meeting HR Department" time="Yesterday,12.30 PM" />
            <Announcements2 question1="IT Department need two more talents for UX/UI Designer" time="Yesterday,09.15 AM" />
            <div className="btn-lb" >
            <button className="btn1" >See All Announcement</button>
            </div>
        </div>
    )
}
export default Announcements;