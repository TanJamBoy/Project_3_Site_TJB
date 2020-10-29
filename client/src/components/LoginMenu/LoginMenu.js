import React from 'react';
import "./LoginMenu.css"

function LoginMenu(props) {
    return (
        <form>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={props.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" onChange={props.handleChange}/>
            </div>
            <button type="submit" className="btn btn-secondary" onClick={props.handleSubmit}>Submit</button>
        </form>
    )
};

export default LoginMenu;