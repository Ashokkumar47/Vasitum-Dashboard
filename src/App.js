import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <>
    
      <div className="app">
        <Sidebar />
        <div className="box">
          <Navbar />
          <Dashboard />
        </div>
      </div>
     
    </>
  );
}

export default App;
