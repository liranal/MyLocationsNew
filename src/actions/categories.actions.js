export const addCategory = (newCategory) => {
  return {
    type: "ADD_CATEGORY",
    payload: newCategory,
  };
};

/*export const fetchCategories = () => {
  return {
    type: "FETCH_CATEGORIES",
  };
};*/

export const EditCategory = (EditedCategory) => {
  return {
    type: "EDIT_CATEGORY",
    payload: EditedCategory,
  };
};

export const RemoveCategory = (removeCategory) => {
  return {
    type: "REMOVE_CATEGORY",
    payload: removeCategory,
  };
};
