import { getUsers } from "./create/lcreate";
import L from "./Login";
import React, { Component } from "react";

import "./Header.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <>
        <header className="site-header clearfix">
          <nav>
            <div class="logo">
              <h1>Chocolates</h1>
            </div>
            <Router>
              <div class="menu">
                <ul>
                  <li>
                    <NavLink to="/home" exact activeStyle={{ color: "red" }}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/brands" exact activeStyle={{ color: "red" }}>
                      Brands
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/chocolates"
                      exact
                      activeStyle={{ color: "red" }}
                    >
                      Chocolates
                    </NavLink>
                  </li>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li>
                    <NavLink to="/login" exact activeStyle={{ color: "red" }}>
                      Login
                    </NavLink>
                  </li>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li>Search</li>
                </ul>
              </div>
            </Router>
          </nav>
        </header>
      </>
    );
  }
}
