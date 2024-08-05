import React from "react";
import Stats from "./Stats";
import StatsBig from "./StatsBig";
import Announcements from "./Announcements";
import UpcomingSchedule from "./UpcomingSchedule";
import Activity from "./Activity";
import "./Dashboard.css";
import tr from "../components/tr.svg";
import te from "../components/te.svg";

function Dashboard() {
  return (
    <div className="DD">
      <div className="dashboard">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="stats-header">
          <div className="stats-container">
            <Stats
              title="Available Position"
              count="24"
              subText="4 Urgently needed"
              color="rgba(255, 81, 81, 1)"
              background="rgba(255, 239, 231, 1)"
            />
            <Stats
              title="Job Open"
              count="10"
              subText="4 Active hiring"
              color="rgba(55, 134, 241, 1)"
              background="rgba(232, 240, 251, 1)"
            />
            <Stats
              title="New Employees"
              count="24"
              subText="4 Department"
              color="rgba(238, 97, 207, 1)"
              background="rgba(253, 235, 249, 1)"
            />
          </div>
        </div>
        <div className="stats-container large">
          <StatsBig
            title="Total Employees"
            count="216"
            men="120 Men"
            women="96 Women"
            imageSrc={te}
          />
          <StatsBig
            title="Talent Request"
            count="16"
            men="6 Men"
            women="10 Women"
            imageSrc={tr}
          />
        </div>
        <div className="main-content">
          <Announcements />
        </div>
      </div>
      <div>
        <Activity />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default Dashboard;
