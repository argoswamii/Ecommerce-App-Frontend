import "./Productdetails.css";
import React, { useState } from "react";
import buyicon from "../../images/buynow.svg";
import { useNavigate } from "react-router-dom";

const Productdetails = () => {
  const navigate = useNavigate();
  const [count, setcount] = useState(1);
  const [selectId, setSelectId] = useState("null");

  const Payment = () => {
    navigate("/payment");
  };
  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  const selector = (e) => {
    setSelectId(e.target.id);
  };

  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <span key={index} style={{ color: "#FFAB07" }}>
        &#9733;
      </span>
    ));

  let rs = 198.0 * count;
  return (
    <div className="pro-con">
      <div className="inside-con">
        <div className="pro-meta">
          <div className="Roller">
            <h2>Roller Rabbit</h2>
            <p>Vado Odelle Dress</p>
          </div>
          <div className="btn">
            <span onClick={decrement}>-</span>
            <span>{count}</span>
            <span onClick={increment}>+</span>
          </div>
        </div>
        <div className="rest">
          <div>
            {stars}
            <span className="review">(320 Review)</span>
          </div>
          <p>Avaliable in stock</p>
        </div>
        <div className="size">
          <h2>Size</h2>
          <div className="sizes">
            <span
              onClick={selector}
              id="s"
              className={selectId === "s" ? "activeStyle" : "normalStyle"}
            >
              S
            </span>
            <span
              onClick={selector}
              id="m"
              className={selectId === "m" ? "activeStyle" : "normalStyle"}
            >
              M
            </span>
            <span
              onClick={selector}
              id="l"
              className={selectId === "l" ? "activeStyle" : "normalStyle"}
            >
              L
            </span>
            <span
              onClick={selector}
              id="xl"
              className={selectId === "xl" ? "activeStyle" : "normalStyle"}
            >
              XL
            </span>
            <span
              onClick={selector}
              id="xxl"
              className={selectId === "xxl" ? "activeStyle" : "normalStyle"}
            >
              XXL
            </span>
          </div>
        </div>
        <div className="description">
          <h2>Description</h2>
          <p>
            Get a little from these Sam Edelman sandals featuring ruched straps
            and lace-up ties, while a braided jute sole make a fresh statement
            for summer.
          </p>
        </div>
        <div className="price-button">
          <span>
            <p>Total Price</p>
            <h2>${rs}</h2>
          </span>
          <div className="buy" onClick={Payment}>
            <img src={buyicon} alt="icon" />
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
