import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { addCategory } from "../actions/categories.actions";
import { useDispatch } from "react-redux";
const AddCategoryPage = (props) => {
  const [categoryName, setcategoryName] = useState("");
  const dispatch = useDispatch();

  const addCategoryEvent = () => {
    dispatch(addCategory(categoryName));
    //props.addCategory(categoryName);
    props.history.push("/Categories");
  };
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Category"
        onChange={(e) => {
          setcategoryName(e.target.value);
        }}
      />
      <Button onClick={addCategoryEvent}>Add</Button>
    </div>
  );
};

/*const mapStateToProps = (state) => {
  return {
    categories: state.CategoryReducer.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory(newCategory) {
      dispatch(addCategory(newCategory));
    },
  };
};*/

export default AddCategoryPage;
