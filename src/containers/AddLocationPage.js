import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { addLocation } from "../actions/locations.actions";
const AddLocationPage = (props) => {
  const [locationName, setlocationName] = useState("");
  const dispatch = useDispatch();
  const addLocationEvent = () => {
    dispatch(addLocation(locationName));
    props.history.push("/Locations");
  };
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Location Name"
        onChange={(e) => {
          setlocationName(e.target.value);
        }}
      />
      <Button onClick={addLocationEvent}>Add Location</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    siteName: state.siteName,
    categories: state.categories,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddLocationPage);
