import React from "react";
import "./Section_fifth.css";
import ff1 from '../images/ff1.png'
import ff2 from '../images/ff2.png'
import ff3 from '../images/ff3.png'
import ff4 from '../images/ff4.png'
import ff5 from '../images/ff5.png'
import ff6 from '../images/ff6.png'
import ff7 from '../images/ff7.png'
function Section_fifth() {
  return (
    <div className="section_fifth">
      <div className="h-center">
        <h1>Range Of Products</h1>
        <div className="s-line"></div>
      </div>
      <div className="fifth-img">
        <div className="fifth-box1">
          <div className="item">
            <h4>01</h4>
            <h3>Power Transformers</h3>
            <p>UP TO 15MVA ,66 KV VOLTAGE CLASS/ WITH OLTC </p>
          </div>
          <div className="box-img">
            <img
              src={ff1}
              alt=""
            />
          </div>
        </div>
        <div className="fifth-box1">
          <div className="item">
            <h4>02</h4>
            <h3>Distribution Transformers</h3>
            <p>UP TO 5 MVA ,33 KV VOLTAGE CLASS/ WITH OLTC </p>
          </div>
          <div className="box-img">
            <img
              src={ff2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="fifth-img">
        <div className="fifth-box1">
          <div className="item">
            <h4>03</h4>
            <h3>Dry Type Transformers</h3>
            <p>UP TO 5 MVA ,33 KV ON-LOAD TAP CHANGER </p>
          </div>
          <div className="box-img">
            <img
              src={ff3}
              alt=""
            />
          </div>
        </div>
        <div className="fifth-box1">
          <div className="item">
            <h4>04</h4>
            <h3>Cast Resin Transformers</h3>
            <p>UP TO 5 MVA ,33 KV VOLTAGE CLASS </p>
          </div>
          <div className="box-img">
            <img
              src={ff4}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="fifth-img">
        <div className="fifth-box1">
          <div className="item">
            <h4>05</h4>
            <h3>Furnace Transformer</h3>
            <p>Up to 15 MVA </p>
          </div>
          <div className="box-img">
            <img
              src={ff5}
              alt=""
            />
          </div>
        </div>
        <div className="fifth-box1">
          <div className="item">
            <h4>06</h4>
            <h3>Dry Type (Tap Changer)</h3>
            <p>Up to 5 MVA</p>
          </div>
          <div className="box-img">
            <img
              src={ff6}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="fifth-img">
        <div className="fifth-box1">
          <div className="item">
            <h4>07</h4>
            <h3>Solar Invertor Duty Transformers</h3>
            <p>Up to 15 MVA</p>
          </div>
          <div className="box-img">
            <img
              src={ff7}
              alt=""
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Section_fifth;
