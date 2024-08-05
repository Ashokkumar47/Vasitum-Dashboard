import React from 'react';
import './Navbar.css';
import { ReactComponent as SearchIcon } from '../components/searchicon.svg'; // Adjust path as needed
import { ReactComponent as NotificationIcon } from '../components/notification.svg'; // Replace with your actual SVG file
import { ReactComponent as MessageIcon } from '../components/message.svg'; // Replace with your actual SVG file
import { ReactComponent as Profile } from '../components/profile.svg';
import { ReactComponent as DownA } from '../components/down.svg';
import {ReactComponent as menu} from '../components/menu1.svg';
import dro from "../components/dro.svg";


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left11">
        <img src={dro} alt="" />
        </div>
        <div className="navbar-right">
          <div className="search-bar">
           
            <input type="text" placeholder="Search" />
            
            <SearchIcon className="search-icon" />
          </div>
          <div className="icons">
            <NotificationIcon className="icon" />
            <MessageIcon className="icon" />
          </div>
          <div className="user-profile">
          <Profile className="icon" />

            <span>Adminra John</span>
            <DownA className="icon" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar; 




