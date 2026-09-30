import React from "react";
import "../css/navbar.css";

function Navbar({ username }) {
  return (
    <div className="navbar">
      <h3>Welcome, {username}</h3>

      <div className="nav-right">
        <span className="icon"><i className="fa-regular fa-circle-user"></i></span>
        <span>{username}</span>
      </div>
    </div>
  );
}

export default Navbar;