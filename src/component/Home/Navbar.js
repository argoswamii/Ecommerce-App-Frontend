import "./Navbar.css";
import profile from "../../images/profile.svg";
import menuicon from "../../images/menu.png";
import React from "react";

const Navbar = () => {
  return (
    <div className="menubar">
      <span className="menu">
        <img src={menuicon} alt="menu" />
      </span>
      <span className="user">
        <div className="profilcover">
          <img src={profile} alt="hi" />
        </div>
      </span>
    </div>
  );
};

export default Navbar;
