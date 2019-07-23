import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { getBrands } from "./Create/Bcreate";

class Brandslist extends Component {
  // useEffect(() => {
  //   props.dispatch(getPosts());
  // }, []);
  componentDidMount() {
    this.props.dispatch(getBrands());
  }

  render() {
    return (
      <>
        <div>
          <h1>Brand List</h1>
          {this.props.brands.map(d => (
            <ul>
              {" "}
              <li key={d.id}>
                <Link to={`/brands/${d.id}`}> {d.name} </Link>
              </li>
              <img src={d.logo} />
            </ul>
          ))}
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    brands: state.brands,
    isLoading: state.isLoading
  };
}
export default connect(mapStateToProps)(Brandslist);
