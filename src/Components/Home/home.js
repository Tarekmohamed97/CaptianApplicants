import React from 'react';
import { Link} from "react-router-dom";
import logo from '../../assets/swvl-logo.png';
import "./home.css"

function Home() {
    return (
        <div className = "home-container">
            <img className = "logo-image-home" src = {logo}/>
            <Link to = "/captain-form">
                <button className = "joinUs-button">Join Us Now</button>
            </Link>
        </div>
    )
}

export default Home
