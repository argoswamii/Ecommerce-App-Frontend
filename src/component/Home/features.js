import React from "react";
import "./feature.css";
import f1icon from "../../images/imagef1.png";
import f2icon from "../../images/image2@2x.png";

const features = () => {
  return (
    <>
      <div className="feature">
        <div className="feature01">
          <img className="f1i" src={f1icon} alt="ficon" />
          <div className="offer">
            <div className="discount">
              <h1>50% Off</h1>
              <p>On everything today</p>
              <span>With code:FSCREATION</span>
              <div>Get Now</div>
            </div>
          </div>
        </div>
        <div className="feature02">
          <img className="f1i" src={f2icon} alt="ficon" />
          <div className="offer">
            <div className="discount">
              <h1>70% Off</h1>
              <p>On everything today</p>
              <span>With code:FSCREATION</span>
              <div>Get Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default features;
