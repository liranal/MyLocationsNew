import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import LocationReducer from "./reducers/location.reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

/*const store = createStore(
  combineReducers({ CategoryReducer, LocationReducer })
);*/

///////////////////////////
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ CategoryReducer, LocationReducer })
);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

//export default store;
