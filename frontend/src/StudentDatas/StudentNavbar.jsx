import React from "react";
import { NavLink } from "react-router-dom";
import './StudentNavbar.css'

const StudentNavbar = () => {
  return (
    <div className="StudentNavbar">
      <NavLink to="/">student entry</NavLink>
      <NavLink to="/details">student details</NavLink>
    </div>
  );
};

export default StudentNavbar;
