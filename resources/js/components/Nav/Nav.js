import React from 'react';
import "../../../sass/Nav.scss";
import Logo from "../../../img/Logo.png";

const Nav = () => {
    return (
        
        <nav>
            <div className="navbar">
                <img className="navLogo" src={Logo} alt="Logo Image" />
                <ul className="navLinks">
                    <li className="navItem">Main</li>
                    <li className="navItem">How To Prepare</li>
                    <li className="navItem">CDA Interview Questions</li>
                    <li className="navItem">Contact Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;