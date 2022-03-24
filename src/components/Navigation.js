import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css'
import logoReddit from "../assets/logo-reddit.png"

function Navigation() {

    return(
        <>
            <header className="nav-outer-container">
                <div className="nav-inner-container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="App-link">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/subreddit/:subredditId" activeClassName="App-link">Subreddit</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-logo">
                        <img src={logoReddit} alt="reddit logo" className="logo-reddit"/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigation