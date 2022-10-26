import React from "react";
import cases from "../assets/case.png";
import watches from "../assets/watches.png";
import temperedGlass from "../assets/tempered_glass.png";

const CallToAction = () => {
  return (
    <div className="callToAction-container">
      <div className="title-container">
        <h2>What are you looking for?</h2>
      </div>
      <div className="callToAction-content">
        <div className="action-container">
          <h4 className="container-title">CASES</h4>
          <div className="container-img">
            <img className="img" src={cases} alt="" />
          </div>
          <button className="btn">PROTECT ME</button>
        </div>
        <div className="action-container">
          <h4 className="container-title">WATCHBANDS</h4>
          <div className="container-img">
            <img className="img" src={watches} alt="" />
          </div>
          <button className="btn">LOOK GOOD</button>
        </div>
        <div className="action-container">
          <h4 className="container-title">GLASS</h4>
          <div className="container-img">
            <img className="img" src={temperedGlass} alt="" />
          </div>
          <button className="btn">ANTI-SCRATCH</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
