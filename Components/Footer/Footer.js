import React from "react";
import "./Footer.scss";
import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import {BiPhone} from "react-icons/bi";
import {FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaWhatsapp} from "react-icons/fa";


export default function Footer() {
    return     <div className="footer">


        <div className="footer-content-container">
            <div className={"footer-content"}>
                <div className="footer-section">
                    <h3>About Us</h3>

                    <p>About Us</p>
                    <p>Our Products</p>
                    <p>Partner with us</p>
                    <p>Blog</p>

                </div>
                <div className="footer-section">
                    <h3>Legal</h3>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p className={"flex gap-2 items-center"}><AiOutlineMail/> example@example.com</p>
                    <p className={"flex gap-2 items-center"}><BiPhone/> 123-456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Social</h3>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <AiOutlineInstagram/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp/>
                        </a>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <hr/>
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </div>

    </div>
}
