import React from 'react';
import './AltNavbar.css';

function AltNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                </ul>
                <ul className="form-inline my-2 my-lg-0">
                    <a href="/" style={{fontSize: 30, color: "white"}}>Back</a>
                </ul>
            </div>
        </nav>
    )
};

export default AltNavbar;