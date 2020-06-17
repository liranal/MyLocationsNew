import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import LocationReducer from "./reducers/location.reducer";

const store = createStore(
  combineReducers({ CategoryReducer, LocationReducer })
);

export default store;
