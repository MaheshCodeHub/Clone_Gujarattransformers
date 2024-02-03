import React from "react";
import "./Section_Seven.css"
import ss1 from '../images/ss1.jpg'
import ss2 from '../images/ss2.jpg'
import ss3 from '../images/ss3.jpg'
import ss4 from '../images/ss4.jpg'
import ss5 from '../images/ss5.jpg'
import ss6 from '../images/ss6.jpg'
function Section_Seven() {
  return (
    <div className="section_seven">
      <div className="h-center">
        <h1>Our Clients</h1>
        <div className="s-line"></div>
      </div>
      <div className="seven-img">
        <img src={ss1} alt="" />
        <img src={ss2} alt="" />
        <img src={ss3} alt="" />
        <img src={ss4} alt="" />
        <img src={ss5} alt="" />
        <img src={ss6} alt="" />
      </div>
      <div className="btn">
        <button>All Clients</button>
      </div>
    </div>
  );
}

export default Section_Seven;
