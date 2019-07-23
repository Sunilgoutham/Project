import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import "./Header.css";
import Loginpage from "./Loginpage";
import NavBar from "./NavBar";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="site-header clearfix">
          <nav>
            <div class="logo">
              <h1>Chocolates</h1>
            </div>

            <Router>
              <Switch>
                <div class="menu">
                  <ul>
                    <li>
                      <Link to="/home" exact activeStyle={{ color: "blue" }}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="/brands"
                        exact
                        activeStyle={{ color: "blue" }}
                      >
                        Brands
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/chocolates"
                        exact
                        activeStyle={{ color: "blue" }}
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
                      <NavLink
                        to="/login"
                        exact
                        activeStyle={{ color: "blue" }}
                      >
                        Login
                      </NavLink>
                    </li>

                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li>
                      <form>
                        <input type="text" placeholder="Search" />
                        <button>Search</button>
                      </form>
                    </li>
                  </ul>
                </div>
              </Switch>
            </Router>
          </nav>
        </header>
      </>
    );
  }
}
