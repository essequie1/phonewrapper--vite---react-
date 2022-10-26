import React from "react";
import "./styles/styles.css";
import newIn from "../assets/new-in.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="heroImg" src={newIn} alt="" />
      <div className="sideContainer">
        <h3 className="heroTitle">CHECK OUT OUR NEW DROPS</h3>
        <button className="btn">SHOP NOW!</button>
      </div>
    </div>
  );
};

export default Hero;
