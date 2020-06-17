import { genId } from "../utils/Utility";

const initState = {
  categories: [{ id: 0, name: "Default" }],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      const newCategory = { name: action.payload, id: genId() };
      const newerCategories = [...state.categories, newCategory];
      state = { ...state, categories: newerCategories };
      break;
    // case "FETCH_CATEGORIES":
    //   state = { ...state };
    //   break;
    case "EDIT_CATEGORY":
      let new_categories = [...state.categories];
      let indexToUpdate = new_categories.findIndex(
        (category) => category.id === action.payload.id
      );
      new_categories.splice(indexToUpdate, 1);
      state = { ...state, categories: [...new_categories, action.payload] };

      break;
    case "REMOVE_CATEGORY":
      console.log("RemoveCatergory Reducer");
      let temp_categories = [...state.categories];
      let indexToRemove = temp_categories.findIndex(
        (category) => category.id === action.payload.id
      );
      temp_categories.splice(indexToRemove, 1);
      state = { ...state, categories: temp_categories };
      break;

    default:
      state = state;
  }

  return state;
};

export default reducer;
