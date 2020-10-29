import React from 'react';
import "./SignupMenu.css"

function SignupMenu(props) {
    return (
        <form>
            <h1 className="signupTitle">Sign Up</h1>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={props.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="username">Display Name</label>
                <input type="username" className="form-control" id="username" onChange={props.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" onChange={props.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="confrimPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" onChange={props.handleChange}/>
            </div>
            <button type="submit" className="btn btn-secondary" onClick={props.handleSubmit}>Submit</button>
        </form>
    )
};

export default SignupMenu;