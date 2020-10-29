import React, { useEffect, useState } from 'react';
import AltNavbar from "../../components/AltNavbar/AltNavbar";
import "../Main.css";
import LoginMenu from "../../components/LoginMenu/LoginMenu";
import * as firebase from "firebase/app";
import "firebase/auth";

function Login() {

    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        console.log(userInput);
    });

    function validateEmail(email) {
        if (/\S+@\S+\.\S+/.test(email)) {
            return email;
        };
    };

    function validatePassword(password) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
            return password;
        };
    };

    function handleChange(event) {
        switch (event.target.id) {
            case "email":
                setUserInput({ ...userInput, email: event.target.value });
            break;
            case "password":
                setUserInput({ ...userInput, password: event.target.value })
            break;
            case "confirmPassword":
                setUserInput({ ...userInput, confirmPassword: event.target.value })
            break;
            default:

            break;
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        let validEmail = validateEmail(userInput.email);
        let validPass = validatePassword(userInput.password);

        console.log(validEmail);
        console.log(validPass);

        if (validEmail && validPass) {
            firebase.auth().signInWithEmailAndPassword(validEmail, validPass).catch(function(error) {
                var errorMessage = error.message;
                console.log(errorMessage);
              });
        };
    };

    return (
        <div className="background">
            <AltNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <center>
                            <LoginMenu handleChange={handleChange} handleSubmit={handleSubmit} />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;