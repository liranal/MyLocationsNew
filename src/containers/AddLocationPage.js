import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { addLocation } from "../actions/locations.actions";
const AddLocationPage = (props) => {
  const [locationName, setlocationName] = useState("");
  const [categoryID, setcategoryID] = useState(0);
  const categories = useSelector((state) => {
    return state.CategoryReducer.categories;
  });
  const dispatch = useDispatch();
  const addLocationEvent = () => {
    dispatch(addLocation({ name: locationName, categoryID: categoryID }));
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
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={categoryID}
      >
        {categories.map((category, index) => {
          return (
            <MenuItem
              key={index}
              value={category.id}
              onClick={() => {
                console.log(category);
                setcategoryID(category.id);
              }}
            >
              {category.name}
            </MenuItem>
          );
        })}
      </Select>
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
