import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        )
      );
  },
});

export const selectContacts = (state) => state.contacts.items;

export const contactReducer = slice.reducer;

export const selectIsLoading = (state) => state.contacts.loading;
