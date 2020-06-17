import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { connect, useDispatch, useSelector } from "react-redux";
import { editLocation } from "../actions/locations.actions";

const EditLocationPage = (props) => {
  const dispatch = useDispatch();
  const [locationName, setlocationName] = useState("");
  const location = useSelector((state) => {
    return state.LocationReducer.locations.find((location) => {
      return location.id == props.match.params.id;
    });
  });

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
        value={location.name}
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
