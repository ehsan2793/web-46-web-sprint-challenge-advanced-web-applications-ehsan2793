import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import LogOut from './components/LogOut'
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./helpers/axiosWithAuth"
import "./styles.scss";

function App(props) {


  const logOut = () => {
    axiosWithAuth()
      .post('logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href = '/'


      }
      ).catch(error => console.error(error))

  }


  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logOut} data-testid="logoutButton" href="#"> logout</a>
        </header>
        <Switch>
          <PrivateRoute exact path="/BubblePage" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />

        </Switch>
      </div>

    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//!2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.