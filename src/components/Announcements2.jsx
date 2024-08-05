import React from 'react'

import pin from "../components/pin.svg";
import scroll from "../components/scroll.svg";
import './Announcements.css';
export const Announcements2 = ({ question1, time }) => {
    return (
        <div className="ann-con">
            <div className="ann-con-1" >
                <div className="ann-con-11" >
                    {question1}
                </div>
                <div className="ann-con-12" >
                    {time}
                </div>
            </div>
            <div className="ann-con-13" >
                <img className="ann-con-14" src={pin}
                    alt="h1" />
                <div className="def">
                    <img src={scroll} alt="..."></img>
                </div>
            </div>
        </div>
    )
}
