import React from 'react'
import "./Section_Second.css"
import logo2 from '../images/logo2.png'
const Section_Second = () => {
  return (
    <div className='section_second'>
      <div className="logo">
        <img src={logo2} alt="" srcset="" />
      </div>
      <div className="para">
        <p>We take pleasure in introducing ourselves as one of the leading manufacturers of transformers for over 50 years with special experience in design & manufacturing of Power, Distribution, Air-cooled, Furnace, Earthing, Converter Duty, High Frequency, Rectifier, Traction, Isolation, Variable frequency drive, and Generator transformers.</p>
        <p>Our projects from diverse sectors of the Indian industry has bought innovated LOW LOSS TRANSFORMERS from Gujarat Transformers. Our Technical Collaboration for R&D with our suppliers has made it possible for running our transformers for up to 50 years.</p>
      </div>
      <div className="btn">
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Section_Second
