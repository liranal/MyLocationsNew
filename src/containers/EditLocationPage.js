import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { editLocation } from "../actions/locations.actions";

const EditLocationPage = (props) => {
  const [locationName, setlocationName] = useState("");
  const dispatch = useDispatch();

  const EditLocationEvent = () => {
    dispatch(editLocation({ name: locationName, id: props.match.params.id }));
    //props.EditCategory({ name: categoryName, id: props.match.params.id });
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
      <Button onClick={EditLocationEvent}>Edit</Button>
    </div>
  );
};

/*const mapStateToProps = (state) => {
  return {
    categories: state.LocationReducer.locations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    EditCategory(newCategory) {
      dispatch(EditCategory(newCategory));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditLocationPage);*/
export default EditLocationPage;
