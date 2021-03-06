import React, { Component } from "react";
import { getSearch } from "./create/lcreate";
import { connect } from "react-redux";
class Search extends Component {
  componentDidMount() {
    // this.props.dispatch(getChocolats());
    this.props.dispatch(getSearch(this.props.text));
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        {this.props.searchData.map(d => (
          <ul>
            <li key={d.id}>{d.name}</li>
            <img src={d.image} />
          </ul>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    searchData: state.searchData,
    text: state.text
  };
}

export default connect(mapStateToProps)(Search);
