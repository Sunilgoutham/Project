import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { getBrandDesc } from "./Create/Bcreate";

class BrandsDescription extends Component {
  // useEffect(() => {
  //   props.dispatch(getPosts());
  // }, []);
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch(getBrandDesc(this.props.match.params.id));
  }

  render() {
    return (
      <>
        <h1>BrandDescription:</h1>
        <h1>{this.props.brandsDes.name}</h1>
        <p>{this.props.brandsDes.desc}</p>
        <>{this.props.brandsDes.image}</>
        <img src={this.props.brandsDes.logo} />
      </>
    );
  }
}
function mapStateToProps(state) {
  console.log("state" + state);
  return {
    brandsDes: state.brandsDes,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(BrandsDescription);
