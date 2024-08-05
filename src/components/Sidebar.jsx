import React, { useState } from "react";
import "./Sidebar.css";
import dashboard from "../components/Vector.svg";
import recruitment from "../components/recruitment.svg";
import support from "../components/support.svg";
import settings from "../components/settings.svg";
import schedule from "../components/schedule.svg";
import employee from "../components/employee.svg";
import department from "../components/department.svg";
import vasitum1 from "../components/vasitum1.svg";
// import Employee from "./Employee";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item1" id="looo">
          <img src={vasitum1} alt="" />
        </li>
        <br />

        <li className="menu-item" id="a">
          <button>MAIN MENU</button>
        </li>

        <li
          className={`menu-item ${activeItem === "dashboard" ? "active" : ""}`}
        >
          <button onClick={() => handleClick("dashboard")}>
            <img src={dashboard} alt="" /> 
            <span  class="dashboard-text">Dashboard</span>
          </button>
        </li>
        <li
          className={`menu-item ${
            activeItem === "recruitment" ? "active" : ""
          }`}
        >
          <button onClick={() => handleClick("recruitment")}>
            <img src={recruitment} alt="" />
            <span  class="dashboard-text"> Recruitment</span>
            
          </button>
        </li>
        <li
          className={`menu-item ${activeItem === "schedule" ? "active" : ""}`}
        >
          <button onClick={() => handleClick("schedule")}>
            <img src={schedule} alt="" /> 
            <span  class="dashboard-text"> Schedule</span>
          </button>
        </li>
        <li
          className={`menu-item ${activeItem === "employee" ? "active" : ""}`}
        >
          <button onClick={() => handleClick("employee")}>
            {/* <Employee fill="red"/> */}
            <img src={employee} alt="" />
            <span  class="dashboard-text">  Employee</span>
           
          </button>
        </li>
        <li
          className={`menu-item ${activeItem === "department" ? "active" : ""}`}
        >
          <button onClick={() => handleClick("department")}>
            <img src={department} alt="" />
            <span  class="dashboard-text">  Department</span> 
          </button>
        </li>
      </ul>
      <ul className="menu other">
        <li className="menu-item" id="b">
          <button>OTHER</button>
        </li>

        <li className={`menu-item ${activeItem === "support" ? "active" : ""}`}>
          <button onClick={() => handleClick("support")}>
            <img src={support} alt="" /> 
            <span  class="dashboard-text">  Support</span> 
          </button>
        </li>
        <li
          className={`menu-item ${activeItem === "settings" ? "active" : ""}`}
        >
          <button onClick={() => handleClick("settings")}>
            <img src={settings} alt="" />
            <span  class="dashboard-text">  Settings</span>  
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
