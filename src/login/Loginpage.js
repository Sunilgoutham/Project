import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers } from "./create/lcreate";

class Loginpage extends Component {
  // useEffect(() => {
  //   props.dispatch(getPosts());
  // }, []);
  componentDidMount() {
    this.props.dispatch(getUsers());
    console.log("print:" + this.props);
  }

  render() {
    return (
      <>
        <h1>users</h1>
        {this.props.users.map(c => (
          <li key={c.id}>{c.firstName}</li>
        ))}
        {console.log(this.props)}
      </>
    );
  }
}
function mapStateToProps(state) {
  console.log("state" + state);
  return {
    users: state.users,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(Loginpage);
