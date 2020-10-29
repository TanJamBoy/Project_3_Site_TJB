import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {props.isLoggedIn ? <a href="/stats" style={{fontSize: 30, color: "white"}}>Stats</a> : <a href="/login" style={{fontSize: 30, color: "white"}}>Login</a>}
                </ul>
                <ul className="form-inline my-2 my-lg-0">
                    {props.isLoggedIn ? <button className="btn btn-danger" onClick={props.handleLogout}>Logout</button> : <a href="/signup" style={{fontSize: 30, color: "white"}}>Sign Up</a>}
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;