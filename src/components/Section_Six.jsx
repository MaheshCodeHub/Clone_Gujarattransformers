import React from "react";
import "./Section_Six.css"
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
import s4 from '../images/s4.jpg'
import s5 from '../images/s5.jpg'
function Section_Six() {
  return (
    <div className="section_six">
      <div className="h-center">
        <h1>Application Of Transformers</h1>
        <div className="s-line"></div>
      </div>
      <div className="six-img">
        <img src={s1} alt="" />
        <img src={s2} alt="" srcset="" />
        <img src={s3} alt="" />
      </div>
      <div className="six-img">
        <img src={s4} alt="" />
        <img src={s5} alt="" srcset="" />
        <img src={s3} alt="" />
      </div>
    </div>
  );
}

export default Section_Six;
