import React from "react";
import './Header.css';
import facebookLogo from '../../images/f_logo_RGB-Blue_58.png'
import flashingThunderLogo from '../../images/logo.jpg'


const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top__logo">
                    <img className="header-logo" src={flashingThunderLogo} alt="Flashing Thunder Logo"></img>
                </div>
                <div className="header-top__navbar">
                    <div className="header-top__navigation">
                        <div className="navbar">
                            <a href="/" className="navbar-item">Home</a>
                            <a href="/about" className="navbar-item">About</a>
                            <a href="/products" className="navbar-item">Products</a>
                            <a href="/shop" className="navbar-item">Thunder Wear</a>
                            <a href="/contact" className="navbar-item">Contact</a>
                        </div>
                    </div>
                    <hr className="header-top__seperator" />
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-bottom__phone">
                    641-732-5558
                </div>
                <div className="header-bottom__email">
                    katie@flashingthunder.com
                </div>
                <div>
                    <a href="https://www.facebook.com/iowaflashingthunder/">
                        <img className="facebook-logo" src={facebookLogo} alt="Facebook Logo"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;