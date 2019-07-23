import React, { Component } from "react";
import Signform from "./Signform";
export default class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Signform />
        </div>
      </div>
    );
  }
}
