import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSliсe";
import { filterReducer } from "./filtersSlice";


export const store = configureStore({
  reducer: {
      contacts: contactReducer,
      filters: filterReducer,
  },
});


