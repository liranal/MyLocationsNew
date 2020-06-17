import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { addLocation } from "../actions/locations.actions";
import { validate } from "../utils/formValidation";
const AddLocationPage = (props) => {
  const [locationName, setlocationName] = useState("");
  const [categoryID, setcategoryID] = useState(0);
  const [longtitude, setlongtitude] = useState(0);
  const [latitude, setlatitude] = useState(0);
  const [address, setaddress] = useState("");

  const categories = useSelector((state) => {
    return state.CategoryReducer.categories;
  });
  const dispatch = useDispatch();
  const addLocationEvent = () => {
    dispatch(
      addLocation({
        name: locationName,
        categoryID: categoryID,
        longtitude: longtitude,
        latitude: latitude,
        address: address,
      })
    );
    props.history.push("/Locations");
  };
  return (
    <div>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Location Name"
          required="true"
          onChange={(e) => {
            setlocationName(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Latitude"
          required="true"
          onChange={(e) => {
            setlatitude(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Longtitude"
          required="true"
          onChange={(e) => {
            setlongtitude(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Address"
          onChange={(e) => {
            setaddress(e.target.value);
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
      </FormControl>
    </div>
  );
};

/*const mapStateToProps = (state) => {
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
*/
export default AddLocationPage;
