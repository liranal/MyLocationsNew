import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { connect, useDispatch, useSelector } from "react-redux";
import { editLocation } from "../actions/locations.actions";

const EditLocationPage = (props) => {
  const dispatch = useDispatch();

  const [categoryID, setcategoryID] = useState(0);
  const [longtitude, setlongtitude] = useState(0);
  const [latitude, setlatitude] = useState(0);
  const [address, setaddress] = useState("");
  const [locationName, setlocationName] = useState("");
  const categories = useSelector((state) => {
    return state.CategoryReducer.categories;
  });
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
      <FormControl>
        <TextField
          id="standard-basic"
          label="Location Name"
          placeholder={location.name}
          value={locationName}
          onChange={(e) => {
            setlocationName(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Latitude"
          placeholder={location.latitude}
          onChange={(e) => {
            setlatitude(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Longtitude"
          placeholder={location.longtitude}
          onChange={(e) => {
            setlongtitude(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Address"
          placeholder={location.address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location.categoryID}
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
        <Button onClick={EditLocationEvent}>Edit</Button>
      </FormControl>
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
