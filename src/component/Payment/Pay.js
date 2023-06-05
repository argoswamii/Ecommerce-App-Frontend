import "./pay.css";
import React, { useState } from "react";
import Done from "../../images/done.png";

const Pay = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform basic validation
    const errors = {};
    if (!cardNumber) {
      errors.cardNumber = "Card number is required.";
    } else if (cardNumber.length !== 16) {
      errors.cardNumber = "Card number must be 16 digits.";
    }
    if (!expiryDate) {
      errors.expiryDate = "required.";
    }
    if (!cvv) {
      errors.cvv = "required.";
    } else if (cvv.length !== 3) {
      errors.cvv = "CVV must be 3 digits.";
    }

    setErrors(errors);

    // If there are no errors, simulate loading and success state
    if (Object.keys(errors).length === 0) {
      setIsLoading(true);

      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 4000);
    }
  };
  return (
    <div className="main">
      {isLoading ? (
        <div className="loding">
          <img src="https://i.gifer.com/ZZ5H.gif" alt="lo" />
          <h2>Payment is processing...</h2>
          <div>Please wait, do not close this screen</div>
        </div>
      ) : isSuccess ? (
        <div className="successful">
          <img style={{ height: "30px" }} src={Done} alt="check" />
          <h2>Payment received!</h2>
          <p className="p1">Your order is now on the way.</p>
          <p> Please check your email for the receipt.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              placeholder="  1234-1234-1234-1234"
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            {errors.cardNumber && <div>{errors.cardNumber}</div>}
          </div>
          <div className="x">
            <label htmlFor="cardName">Name on Card</label>
            <input
              placeholder="  Jhone Dow"
              type="text"
              id="cardName"
              value={cardName}
              onChange={handleCardNameChange}
            />
          </div>
          <div className="both">
            <div className="ExD">
              <label htmlFor="expiryDate">Expiration Date</label>
              <input
                placeholder="  2023"
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
              {errors.expiryDate && <div>{errors.expiryDate}</div>}
            </div>
            <div className="security">
              <label htmlFor="cvv">Security Code</label>
              <input
                placeholder="  023"
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
              />
              {errors.cvv && <div>{errors.cvv}</div>}
            </div>
          </div>
          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Pay;
