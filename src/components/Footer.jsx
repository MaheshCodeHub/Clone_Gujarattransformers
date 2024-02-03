import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-grid'>
      <div className="first-item">
        <h4>Quick links</h4>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
        </ul>
      </div>
      <div className="second-item">
        <ul>
            <li>Clients</li>
            <li>Quotation</li>
            <li>Contact us</li>
        </ul>
      </div>
      <div className="third-item">
        <h4>Get In Touch</h4>
        <ul>
            <li>Po Maneja, Vadodara -13, Gujarat state, India</li>
            <li>111 22 3333</li>
            <li>4444 5566778</li>
            <li>sales@gujarattransformers.com</li>
            <li>gujarattransformers@hotmail.com</li>
        </ul>
      </div>
      <div className="fourth-item">
        <h4>Gujarat Transformers Pvt Ltd.</h4>
        <span>It is our commitment to provide you customise transformer as per your requirement with world class quality & economical price.</span>
      </div>
    </div>
  )
}

export default Footer
