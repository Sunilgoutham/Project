import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import { getChocolatesDesc } from "./Create/chocolatecreate";
import { BrowserRouter as Router, Link } from "react-router-dom";

class ChocolatesDescription extends Component {
  // useEffect(() => {
  //   props.dispatch(getPosts());
  // }, []);
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch(getChocolatesDesc(this.props.match.params.id));
  }

  render() {
    return (
      <>
        <h1>ChocolatesDescription:</h1>
        <h1>{this.props.chocolatesDec.name}</h1>
        <p>{this.props.chocolatesDec.desc}</p>
        <img src={this.props.chocolatesDec.image} />
      </>
    );
  }
}
function mapStateToProps(state) {
  console.log("state" + state);
  return {
    chocolatesDec: state.chocolatesDec,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(ChocolatesDescription);
