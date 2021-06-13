import React from 'react';
import logo from '../../assets/Swvl-logo-nav.png';
import "./navBar.css";


function NavBar() {
    return (
        <div className = "navContainer">
            <img className = "logo-image-nav" src = {logo}/>
        </div>
    )
}

export default NavBar;
