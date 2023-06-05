import React from "react";
import "./Productmaster.css";
import Menu from "./menu";
import Productdetails from "./Productdetails";
const Productmaster = () => {
  return (
    <div className="Appp">
      <div className="container-pic">
        <Menu />
        <Productdetails />
      </div>
    </div>
  );
};

export default Productmaster;
