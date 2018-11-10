import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">
            <h1>Property Titan</h1>
          </Link>
          <h2>Simplify your Search for a Rentable Property</h2>
          <br />

          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
