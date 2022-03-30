import React from "react";
import {NavLink} from "react-router-dom";
import './Header.css'
import logoReddit from "../../assets/logo-reddit.png"

function Header() {

    return(
        <>
            <header className="nav-outer-container">
                <div className="nav-inner-container">
                    <nav>
                        <ul className="navigation-container">
                            <li>
                                <h4>
                                    <NavLink exact to="/" className="navigation" activeClassName="App-link">Hottest posts</NavLink>
                                </h4>
                            </li>
                            <li>
                                <h4>
                                    <NavLink to="/subreddit/:subredditId"  className="navigation" activeClassName="App-link">Reddit</NavLink>
                                </h4>
                            </li>
                        </ul>
                    </nav>
                        <div className="container-logo">
                        <img src={logoReddit} alt="reddit logo" className="logo-reddit"/>
                        <h1 className="logo-name">Reddit</h1>
                        </div>
                </div>
            </header>
        </>
    )
}

export default Header