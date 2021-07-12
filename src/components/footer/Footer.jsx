import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div>
                <a href="/" className="footer-link">Home</a>
                <span  className="footer-link-divider"> | </span>
                <a href="/about" className="footer-link">About</a>
                <span  className="footer-link-divider"> | </span>
                <a href="/products" className="footer-link">Products</a>
                <span  className="footer-link-divider"> | </span>
                <a href="/shop" className="footer-link">Thunder Wear</a>
                <span  className="footer-link-divider"> | </span>
                <a href="/contact" className="footer-link">Contact</a>
            </div>

            <div>
                <p className="footer-address-and-number">700 East Van Buren Street, Mitchell, Iowa 50461 - phone: 641-732-5558</p>
            </div>

        </div>



    );
}

export default Footer;