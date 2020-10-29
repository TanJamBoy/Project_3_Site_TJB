import React, { useEffect, useState } from 'react';
import AltNavbar from "../../components/AltNavbar/AltNavbar";
import "../Main.css";
import SignupMenu from "../../components/SignupMenu/SignupMenu";
import * as firebase from "firebase/app";
import "firebase/auth";
import API from "../../utils/API";

function Signup() {

    const [userInput, setUserInput] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    useEffect(() => {
        console.log(userInput);
    });

    function validateEmail(email) {
        if (/\S+@\S+\.\S+/.test(email)) {
            return email;
        };
    };

    function validateUsername(username) {
        if (username.length > 4) {
            return username;
        };
    };

    function validatePassword(password) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
            return password;
        };
    };

    function validateConfirm(confirm) {
        if (userInput.password === confirm) {
            return true
        } else {
            return false
        };
    };

    function handleChange(event) {
        switch (event.target.id) {
            case "email":
                setUserInput({ ...userInput, email: event.target.value });
            break;
            case "username":
                setUserInput({ ...userInput, username: event.target.value });
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
        let validConfirm = validateConfirm(userInput.confirmPassword);
        let validUsername = validateUsername(userInput.username);

        console.log(validEmail);
        console.log(validUsername);
        console.log(validPass);
        console.log(validConfirm);

        if (validEmail && validPass && validConfirm && validUsername) {
            firebase.auth().createUserWithEmailAndPassword(validEmail, validPass)
            .then(function(){
                var user = firebase.auth().currentUser;

                user.updateProfile({displayName: validUsername})
                .then(function() {
                // Update successful.
                console.log(user)
                let playerInfo = {
                    name: validUsername,
                    firebaseID: user.uid
                }
                API.createPlayer(playerInfo)
                window.location.href = "/"
                }).catch(function(error) {
                    var errorMessage = error.message;
                    console.log(errorMessage);
                });
            })
            .catch(function(error) {
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
                            <SignupMenu handleChange={handleChange} handleSubmit={handleSubmit} />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signup;