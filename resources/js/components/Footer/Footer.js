import React from 'react';
import "../../../sass/Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text">©2013-2016 BeMo Academic Consulting Inc. All rights reserved. <span className="footer-links"><a href="#">Disclaimer &#38; Privacy Policy</a> <a href="#">Contact Us</a></span></p>
            <div className="footer-social-icons">
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
            </div>
        </div>

    )
}

export default Footer