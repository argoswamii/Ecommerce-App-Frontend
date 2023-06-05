import React from "react";
import "./menu.css";
import cart from "../../images/cart-top.svg";
import Arrow from "../../images/arrow-top.svg";
import girl from "../../images/girl.svg";
import whitelove from "../../images/love-white.svg";
import Dots from "../../images/dots.svg";
import Header from "./Header";
const Menu = () => {
  return (
    <>
      <div className="pic">
        <div className="image">
          <img className="girl" src={girl} alt="girl" />
        </div>
        <Header />
        <div className="menu-con">
          <img src={Arrow} alt="arw" />
          <img src={cart} alt="crt" />
        </div>
        <img className="love-ic" src={whitelove} alt="whitelove" />
        <img className="dot" src={Dots} alt="Dots" />
      </div>
    </>
  );
};

export default Menu;
