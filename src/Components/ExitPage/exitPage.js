import React from 'react';
import logo from '../../assets/swvl-logo.png';
import { Link} from "react-router-dom";
import "./exitPage.css";

function ExitPage() {
    return (
        <div className = "exitPage-container">
            <img className = "logo-image-exit" src = {logo}/>
            <h1 style = {{fontSize:60, color: "white" }}>Thank You!</h1>
            <div className = "message-container">
                <h2>
                    <strong>
                    Thank you for applying to join our team, we will get back to you as soon as possible
                    with the response.
                    </strong>
                </h2>
            </div>
            <Link to = "/">
                <button className = "joinUs-button">Back To HOMEPAGE</button>
            </Link>
        </div>
    )
}

export default ExitPage
