import React from "react";
import batterry from "../../images/bettary.svg";
import { BsWifi } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div className="head-container">
      <div className="mobile-head">
        <span className="time">4.46</span>
        <span className="btry">
          <BsWifi />
          <img src={batterry} alt="btry" />
        </span>
      </div>
    </div>
  );
};

export default Header;
