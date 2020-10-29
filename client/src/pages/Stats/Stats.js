import React, { useState } from 'react';
import AltNavbar from "../../components/AltNavbar/AltNavbar";
import "../Main.css";
import * as firebase from "firebase/app";
import "firebase/auth";

function Home() {

    const [userInfo, setUserInfo] = useState();
    const [logState, setLogState] = useState();

    function setUser() {
        var user = firebase.auth().currentUser;
        setUserInfo(user)
    };

    console.log(userInfo)

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setLogState(true);
          setUser();
        } else {
          setLogState(false);
        }
      });

    console.log(logState);

    return (
        <div className="background">
            <AltNavbar />
            <center>
              {userInfo ? <h1>Hello {userInfo.displayName}</h1> : ""}
            </center>
        </div>
    )
};

export default Home;