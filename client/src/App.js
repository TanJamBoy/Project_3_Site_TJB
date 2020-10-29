/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login/Login";
import Stats from "./pages/Stats/Stats";
import Signup from "./pages/Signup/Signup";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgNUNEc1mrTjgbys2ZSbMzs4u_SL_C6OE",
  authDomain: "project-3-e9cb9.firebaseapp.com",
  databaseURL: "https://project-3-e9cb9.firebaseio.com",
  projectId: "project-3-e9cb9",
  storageBucket: "project-3-e9cb9.appspot.com",
  messagingSenderId: "199638027457",
  appId: "1:199638027457:web:3aa352e733c991805e1840",
  measurementId: "G-RCJFB9ZZRB"
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="blackBackground">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/stats">
              <Stats />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
