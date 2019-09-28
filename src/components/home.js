import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCountries } from "../actions/compActions";
import loadingGif from "../giphy.gif";
import CountryList from "./Countryist";

class Home extends Component {
  componentDidMount() {
    this.props.getAllCountries();
  }

  render() {
    const { loading, competitionsResponse } = this.props.myCountries;

    const countryList = loading ? (
      <img src={loadingGif} alt="Please wait....." />
    ) : (
      <CountryList countries={competitionsResponse} />
    );
    return <div className="container">{countryList}</div>;
  }
}

const mapStateToProps = state => {
  console.log("ssss", state);
  return {
    myCountries: state.comp
  };
};

export default connect(
  mapStateToProps,
  { getAllCountries }
)(Home);
