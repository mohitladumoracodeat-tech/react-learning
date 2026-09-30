import React from "react";
import Sidebar from "./components/sidebar";
import DashboardCard from "./components/DashboardCard";
import Navbar from "./components/navbar";
import "./css/User.css";

function User() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="user-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar username={user?.username} />

        <div className="container">

          <DashboardCard title="Total Courses" value="12" />
          <DashboardCard title="Completed" value="8" />

        </div>
      </div>
    </div>
  );
}

export default User;