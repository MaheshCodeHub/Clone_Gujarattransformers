import React from 'react'
import "./Section_Third.css"
import  t1 from '../images/t1.jpg'
import  t2 from '../images/t2.jpeg'
import  t3 from '../images/t3.jpeg'
import  t4 from '../images/t4.jpeg'
import  t5 from '../images/t5.jpeg'
const Section_Third = () => {
  return (
    <div className='section_third'>
      <div className="img1-third">
        <img src={t2} alt="" />
        <img src={t1} alt="" srcset="" />
        <img src={t3} alt="" />
        <img src={t4} alt="" srcset="" />
      </div>
      <div className="img2-third">
        <img src={t5} alt="" />
      </div>
    </div>
  )
}

export default Section_Third
