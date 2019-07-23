import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import PropTypes from "prop-types";
import { validate } from "@babel/types";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      status: "",
      failed: "",
      hits: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  validate = () => {
    if (!this.state.email.includes("@")) {
      this.state.emailError = "Invalid Email";
    }
    if (this.state.email == "") {
      this.state.emailError = "Empty email id Email";
    }
    if (this.state.emailError) {
      this.setState({
        state: this.emailError
      });
      return false;
    }

    if (this.state.password == "") {
      this.state.passwordError = "Empty password";
    }
    if (this.state.passwordError) {
      this.setState({
        state: this.passwordError
      });
      return false;
    }
    return true;
  };

  onSubmit(e) {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
    this.Mount(this.state);
  }
  Mount(data) {
    var headers = {
      "Content-Type": "application/json"
    };
    console.log(data.email);
    fetch(
      `http://localhost:4000/users?email=` +
        data.email +
        "&password=" +
        data.password,
      {
        method: "GET",

        headers: headers
      }
    )
      .then(res => {
        if (res.status === 200) {
          console.log("SUCCESSS");
          var t = "Login Successfully Done!!";
          return res.json();
        }
      })
      .then(res => this.setState({ isLoading: false, hits: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const { isLoading } = this.state;
    let fail;
    let userMessage;

    if (this.state.hits == "") {
      fail = <p>Login Failed Try Again!!</p>;
    } else {
      userMessage = <p>Login Successfully Done!!</p>;
    }
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <div style={{ color: "red" }}>{fail}</div>
          <div style={{ color: "red" }}>{userMessage}</div>

          <div className="form-group">
            <label className="control-label">Email</label>

            <input
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              inline
              required
              className="form-control"
            />
          </div>

          <div style={{ color: "red" }}>{this.state.emailError}</div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              value={this.state.password}
              inline
              required
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
            />
          </div>
          <div style={{ color: "red" }}>{this.state.passwordError}</div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Login</button>
          </div>
        </form>

        <p>Don't have account.Please create account if login failed</p>
        <Router>
          <NavLink to="/register" exact activeStyle={{ color: "red" }}>
            Register
          </NavLink>
        </Router>
      </>
    );
  }
}
// function recevie(data) {
//   let self = this;
//   var headers = {
//     "Content-Type": "application/json"
//   };
//   console.log(data.email);
//   fetch(`http://localhost:4000/users?email=` + data.email, {
//     method: "GET",
//     // body: JSON.stringify(''),

//     headers: headers
//   })
//     .then(res => res.json())
//     .then(res => this.setState({ hits: res }))
//     .catch(() => this.setState({ hasErrors: true }));
// }
