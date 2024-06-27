import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { valueReducer } from "./valueSlice/valueSlice";

const rootReducer = combineReducers({
  value: valueReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
