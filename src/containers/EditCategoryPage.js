import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { EditCategory } from "../actions/categories.actions";
import { connect, useDispatch } from "react-redux";
const EditCategoryPage = (props) => {
  const [categoryName, setcategoryName] = useState();

  const dispatch = useDispatch();
  const EditCategoryEvent = () => {
    dispatch(EditCategory({ name: categoryName, id: props.match.params.id }));
    //props.EditCategory({ name: categoryName, id: props.match.params.id });
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
      <Button onClick={EditCategoryEvent}>Edit</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.CategoryReducer.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    EditCategory(newCategory) {
      dispatch(EditCategory(newCategory));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryPage);
