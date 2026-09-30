import React from "react";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">User Panel</h2>

      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Courses</li>
        <li>Tasks</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;