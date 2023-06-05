import "./Home.css";
import { BsSearch } from "react-icons/bs";
import filter from "../../images/filtter.svg";
import React from "react";

const Home = () => {
  // const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform any necessary actions with the input value
  //   console.log("Input value:", inputValue);
  // };

  return (
    <>
      <div className="title">
        <h1>Welcome,</h1>
        <p className="title-text">Our Fashions App</p>
      </div>
      <div className="search">
        <div className="search-bar">
          <BsSearch className="sicon" />
          {/* <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          ></input> */}
          <div className="stext-box">
            <p className="stext">Search...</p>
          </div>
        </div>
        <div className="filter">
          <img src={filter} alt="filter" />
        </div>
      </div>
    </>
  );
};

export default Home;
