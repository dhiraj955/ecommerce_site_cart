import React from 'react'
import "./Footer.css";
import footer from "../../assets/logo2.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import whatsapp from "../../assets/whatsapp.png"

const Footer = () => {
  return (
    <div className='footer-section'>

    <div className='footer'>
        <div className="footer-logo">
            <img src={footer} alt="" height="50px" />
        </div>
        <ul className='footer-links'>
            <li>About</li>
            <li>Products</li>
            <li>Company</li>
            <li>Offices</li>
            <li>Contact</li>

        </ul>
        <div className="footer-social-icon">
           <div className="footer-icon-container">
            <img src={instagram} alt="" height="30px" />
            </div> 
           <div className="footer-icon-container">
            <img src={facebook} alt=""  height="30px"/>
            </div> 
           <div className="footer-icon-container">
            <img src={whatsapp} alt="" height="30px"/>
            </div> 
        </div>
      
    </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
        </div>
  )
}

export default Footer
