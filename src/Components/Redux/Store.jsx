import { createStore, combineReducers } from "redux";
import cartReducer from "./Reducer";

const store = createStore(
  combineReducers({ cart: cartReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

export default store;
