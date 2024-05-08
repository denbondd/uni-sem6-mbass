import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backendless from "backendless";
import homePageStyles from '../styles/home-page-styles.css';
import linkStyles from '../styles/link-styles';

function Home() {

    return(
        <div className={homePageStyles}>
            <div className="home-page-container">
                <div className="home-page content">
                    <h1>Home page</h1>
                    <div className="nav-links">
                        <div className="nav-link">
                            <Link to="/login" style={linkStyles}><p>Login</p></Link><br />
                            <Link to="/account" style={linkStyles}><p>My Account</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;