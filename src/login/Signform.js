import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Signform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    send(this.state);
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Register</h1>
        <div className="form-group">
          <label className="control-label">firstName</label>
          <input
            value={this.state.firstName}
            onChange={this.onChange}
            type="text"
            inline
            required
            name="firstName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">lastName</label>
          <input
            value={this.state.lastName}
            onChange={this.onChange}
            type="text"
            inline
            required
            name="lastName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            inline
            required
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Register</button>
        </div>
      </form>
    );
  }
}
async function send(data) {
  var headers = {
    "Content-Type": "application/json"
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  };
  const request = new Request("http://localhost:4000/users", options);
  const responce = await fetch(request);
  const status = await responce.status;
  console.log(status);
}
