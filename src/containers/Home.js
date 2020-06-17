import React from "react";
import { connect } from "react-redux";
const Home = (props) => {
  return <div className="home-page">Home</div>;
};

const mapStateToProps = (state) => {
  return {
    siteName: state.siteName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSiteName(newSiteName) {
      dispatch({
        type: "CHANGE_SITE_NAME",
        payload: newSiteName,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
