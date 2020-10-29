import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import PlayBtn from "../../components/PlayBtn/PlayBtn";
import "../Main.css";
import * as firebase from "firebase/app";
import "firebase/auth";

function Home() {

    const [logState, setLogState] = useState();

    let loggedIn;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          loggedIn = true;
          console.log(loggedIn);
          setLogState(loggedIn);
        } else {
          loggedIn = false;
          console.log(loggedIn);
          setLogState(loggedIn);
        }
      });

    console.log(logState);

    function handleLogout() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            setLogState(false);
          }).catch(function(error) {
            // An error happened.
          });
    };

    return (
        <div className="background">
            <Navbar isLoggedIn={logState} handleLogout={handleLogout}/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <center>
                            <h1 className="title">Scavenger</h1>
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <center>
                            <PlayBtn />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;