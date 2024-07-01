import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "contacts",
  storage,

};
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const rootReducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};

