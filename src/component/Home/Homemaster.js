import React from "react";
import "./Homemaster.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Features from "./features";
import Newarrival from "./newarrival";
import Navigationbar from "./Navigationbar";

const Homemaster = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
        <Features />
        <Newarrival />
        <Navigationbar />
      </div>
    </div>
  );
};

export default Homemaster;
