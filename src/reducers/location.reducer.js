import { genId } from "../utils/Utility";

const initState = {
  locations: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      console.log("ACTION FROM LOCATION REDU: ");
      console.log(action.payload);
      const newLocation = {
        name: action.payload.name,
        categoryID:
          action.payload.categoryID == "" ? 0 : action.payload.categoryID,
        address: action.payload.address,
        latitude: action.payload.latitude,
        longtitude: action.payload.longtitude,
        id: genId(),
      };
      const newerLocations = [...state.locations, newLocation];
      state = { ...state, locations: newerLocations };
      break;
    case "EDIT_LOCATION":
      let new_locations = [...state.locations];
      let indexToUpdate = new_locations.findIndex(
        (location) => location.id === action.payload.id
      );
      new_locations.splice(indexToUpdate, 1);
      state = {
        ...state,
        locations: [...new_locations, action.payload],
      };

      break;
    case "REMOVE_LOCATION":
      console.log(state);
      let temp_locations = [...state.locations];
      let indexToRemove = temp_locations.findIndex(
        (location) => location.id === action.payload.id
      );
      temp_locations.splice(indexToRemove, 1);
      state = { ...state, locations: temp_locations };
      break;
    default:
      state = state;
  }

  return state;
};

export default reducer;
