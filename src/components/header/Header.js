import React from "react";
import {NavLink} from "react-router-dom";
import './Header.css'


function Header({src, title, specifications}) {

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
                            {src ?<img src={src} alt="reddit logo" className="logo-reddit"/>: ''}
                        <h1 className="logo-name">{title}</h1>
                            <p className="subreddit-specifications">{specifications}</p>
                        </div>
                </div>
            </header>
        </>
    )
}

export default Header