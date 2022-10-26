import React from "react";
import { useState } from "react";
import "./styles/styles.css";
import custom1 from "../assets/customs/custom-1.png";
import custom2 from "../assets/customs/custom-2.png";
import custom3 from "../assets/customs/custom-3.png";
import custom4 from "../assets/customs/custom-4.png";
import custom5 from "../assets/customs/custom-5.png";
import custom6 from "../assets/customs/custom-6.png";
import custom7 from "../assets/customs/custom-7.png";
import custom8 from "../assets/customs/custom-8.png";
import custom9 from "../assets/customs/custom-9.png";
import custom10 from "../assets/customs/custom-10.png";
import custom11 from "../assets/customs/custom-11.png";
import custom12 from "../assets/customs/custom-12.png";
import custom13 from "../assets/customs/custom-13.png";
import arrow from "../assets/arrow.png";

const Customizables = () => {
  let images = [custom1, custom2, custom3, custom4, custom5, custom6, custom7, custom8, custom9, custom10, custom11, custom12, custom13];
  const [mouseCount, setMouseCount] = useState(0);
  const [image, setimage] = useState(images[Math.round(Math.random() * 12)]);

  function handleSubmit(e) {
    e.preventDefault();
    setMouseCount(mouseCount + 1);
    if (mouseCount == 30) {
      let num = Math.round(Math.random() * 12);
      setimage(images[num]);
      setMouseCount(0);
    }
    console.log(mouseCount);
  }

  return (
    <div className="customizables">
      <div className="customizables-title">
        <h3>Feeling creative?</h3>
        <p>Check out our app to generate your custom desings</p>
        <button className="btn"> TRY NOW!</button>
        <span className="light"></span>
      </div>
      <div onMouseMove={handleSubmit} id="carrousel">
        <img className="carrousel-image" src={image} alt="" />
      </div>
      <div className="wiggle-container">
        <p>Wiggle your mouse to see all the possibilities</p>
        <img className="arrow" src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Customizables;
