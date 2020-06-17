import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchCategories, RemoveCategory } from "../actions/categories.actions";
import { Link } from "react-router-dom";
import {
  ListItemText,
  List,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { ListItemLink } from "../components/ListItemLink";
import DeleteIcon from "@material-ui/icons/Delete";
const Categories = (props) => {
  //const [categories, setcategories] = useState([]);
  const categories = useSelector((state) => {
    return state.CategoryReducer.categories;
  });
  const dispatch = useDispatch();
  /*useEffect(() => {
    loadCategories();
  }, [categories]);*/

  const RemoveCategoryEvent = (categoryInList) => {
    //props.RemoveCategory(categoryInList);
    console.log(categoryInList);
    dispatch(RemoveCategory(categoryInList));
  };

  /*const loadCategories = () => {
    //props.fetchCategories();
    dispatch(fetchCategories());
    console.log(categories);
    //setcategories(props.categories);
  };*/
  return (
    <div className="categories-page">
      {categories.length > 0 ? (
        <List>
          {categories.map((category, index) => {
            return (
              <ListItemLink>
                <Link key={index} to={"/Category/" + category.id}>
                  <ListItemText key={index} primary={category.name} />
                </Link>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => RemoveCategoryEvent(category)}
                  >
                    <DeleteIcon key={index} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItemLink>
            );
          })}
        </List>
      ) : (
        <div>No Categories</div>
      )}
      <Link to="/Categories/Add">Add Category</Link>
    </div>
  );
};

/*const mapStateToProps = (state) => {
  console.log(state);
  return {
    categories: state.CategoryReducer.categories,
  };
};
*/
/*const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories() {
      dispatch(fetchCategories());
    },
    RemoveCategory(categoryToRemove) {
      dispatch(RemoveCategory(categoryToRemove));
    },
  };
};*/

export default Categories;
