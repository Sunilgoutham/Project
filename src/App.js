import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./login/Loginpage";
import SignupPage from "./login/SignupPage";

import NavBar from "./login/NavBar";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Login from "./login/Login";
import Home from "./login/Home";
import Signform from "./login/Signform";

import Chocolateslist from "./Chocolate/Chocolateslist";
import Brandslist from "./Brands/Brandslist";
import ChocolateDescription from "./Chocolate/ChocolateDescription";
import BrandsDescription from "./Brands/BrandsDescription";
import Header from "./login/Header";
import Footer from "./login/Footer";

import search from "./login/Search";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/brands" exact component={Brandslist} />
          <Route path="/brands/:id" exact component={BrandsDescription} />
          <Route path="/chocolates" exact component={Chocolateslist} />
          <Route
            path="/chocolates/:id"
            exact
            component={ChocolateDescription}
          />
          <Route path="/register" exact component={Signform} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/search" exact component={search} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
