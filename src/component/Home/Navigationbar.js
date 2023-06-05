import React from "react";
import "./Navigationbar.css";
import homeicon from "../../images/home.png";
import cart from "../../images/cart.png";
import Notific from "../../images/notification.png";
import profile from "../../images/profile1.png";
import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  const navigate = useNavigate();
  const Productpages = () => {
    navigate("/products");
  };
  return (
    <div className="nav-container">
      <div className="inner-con">
        <span className="home-con">
          <img src={homeicon} alt="home" />
          <p>Home</p>
        </span>
        <img onClick={Productpages} src={cart} alt="cart" />
        <img src={Notific} alt="noti" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Navigationbar;
