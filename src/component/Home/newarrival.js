import React from "react";
import "./newarrival.css";
import imagep1 from "../../images/imagep1.png";
import love from "../../images/love.png";
import imagep2 from "../../images/imagep2.png";

const newarrival = () => {
  return (
    <>
      <div className="newcontainer">
        <div className="newtitle">
          <h1>New Arrivals</h1>
          <span>view All</span>
        </div>
        {/* pro01 */}
        <div className="products">
          <div className="p01">
            <div className="img-icon">
              <img className="img-p01" src={imagep1} alt="p1" />
              <img className="love" src={love} alt="love" />
            </div>
            <div className="p01-text">
              <h2>The Marc Jacobs</h2>
              <p>Traveler Tate</p>
              <h2>$195.00</h2>
            </div>
          </div>
          {/* pro2 */}
          <div className="p01">
            <div className="img-icon">
              <img className="img-p01" src={imagep2} alt="p1" />
              <img className="love" src={love} alt="love" />
            </div>
            <div className="p01-text">
              <h2>Axel Arigato</h2>
              <p className="sneaker">Clean 90 Triple Sneakers</p>
              <h2>$245.00</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default newarrival;
