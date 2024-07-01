import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const state = {
  contacts: {
    items: [],
  },

  filters: {
    name: "",
  },
};

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
