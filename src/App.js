import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./containers/Home";
import Categories from "./containers/Categories";
import Locations from "./containers/Locations";
import EditCategoryPage from "./containers/EditCategoryPage";
import AddLocationPage from "./containers/AddLocationPage";
import AddCategoryPage from "./containers/AddCategoryPage";
import EditLocationPage from "./containers/EditLocationPage";

function App(props) {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">MyLocations</div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/Categories">
                Categories
              </NavLink>
              <NavLink className="nav-link" to="/Locations">
                Locations
              </NavLink>
            </div>
          </div>
        </nav>
        <Route path="/Home" exact component={Home} />
        <Route path="/Categories" exact component={Categories} />
        <Route path="/Categories/Add" exact component={AddCategoryPage} />
        <Route path="/Category/:id" exact component={EditCategoryPage} />
        <Route path="/Locations" exact component={Locations} />
        <Route path="/Location/:id" exact component={EditLocationPage} />
        <Route path="/Locations/Add" exact component={AddLocationPage} />
      </div>
    </Router>
  );
}

/*const mapStateToProps = (state) => {
  console.log(state);
  return {
    siteName: state.CategoryReducer.siteName,
    categories: state.CategoryReducer.categories,
    locations: state.CategoryReducer.locations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);*/
export default App;
