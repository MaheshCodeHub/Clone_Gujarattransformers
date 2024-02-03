import React from "react";
import "./Section_Fourth.css";
import f1 from '../images/f1.jpg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'
import f4 from '../images/f4.jpg'
function Section_Fourth() {
  return (
    <div className="section_fourth">
      <div className="fourth-img">
        <img
          src={f1}
          alt=""
          srcset=""
        />
        <img
          src={f2}
          alt=""
        />
      </div>
      <div className="fourth-img2">
        <img
          src={f3}
          alt=""
        />
        <img
          src={f4}
          alt=""
        />
      </div>
    </div>
  );
}

export default Section_Fourth;
