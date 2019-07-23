import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <>
        <h1>To proceed with Chocolate Collection.</h1>
        <h1>Please</h1>
        <Router>
          <NavLink to="/login" exact activeStyle={{ color: "red" }}>
            Sign up
          </NavLink>
        </Router>
      </>
    );
  }
}
