import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import "./Header.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="site-footer clearfix">
          <nav>
            <div class="logo" />
            <Router>
              <div class="menu">
                <ul>
                  <li>
                    <Link
                      to="/sociallinks"
                      exact
                      activeStyle={{ color: "red" }}
                    >
                      Social Links
                    </Link>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                  </li>
                  <li>
                    <NavLink to="/about" exact activeStyle={{ color: "red" }}>
                      About us
                    </NavLink>
                    <li>Media</li>
                    <li>Career</li>
                    <li>Growth</li>
                  </li>
                  <li>
                    <NavLink
                      to="/collections"
                      exact
                      activeStyle={{ color: "red" }}
                    >
                      Chocolates
                    </NavLink>
                    <li />
                    <li />
                    <li />
                    <li>Our Chocolates</li>
                    <li>Collection</li>
                    <li>Brands</li>
                  </li>
                </ul>
              </div>
            </Router>
          </nav>
        </footer>
      </>
    );
  }
}
