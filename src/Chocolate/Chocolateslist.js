import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getChocolates } from "./Create/chocolatecreate";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Chocolateslist extends Component {
  // useEffect(() => {
  //   props.dispatch(getPosts());
  // }, []);
  componentDidMount() {
    this.props.dispatch(getChocolates());
  }

  render() {
    return (
      <>
        <div>
          <h1>Chocolate List</h1>
          {this.props.chocolates.map(d => (
            <ul>
              {" "}
              <li key={d.id}>
                <Link to={`/chocolates/${d.id}`}> {d.name} </Link>
              </li>
              <>
                <img src={d.image} />
              </>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  console.log("state" + state);
  return {
    chocolates: state.chocolates,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(Chocolateslist);
