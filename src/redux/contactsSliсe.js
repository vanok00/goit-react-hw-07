import { createSlice } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, fetchContacts } from "./contactsOps";

const initialState =  {
items: [],
loading: false,
error: null
      };


  const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      fetchContactsSuccess: (state, action) => {
        state.items = action.payload
        state.loading = false;
      },
setIsLoading: (state, action) => {
  state.loading = action.payload
},
setError: (state, action) => {
  state.error = action.payload
  state.loading = false
},

        deleteContact: (state, action) => {
            state.items= state.items.filter(contact => contact.id !== action.payload)
        },
        addContact: (state, action) => {
          state.items.push(action.payload);
        }
    },
    extraReducers: builder => {
      builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
    },
  });

export const selectContacts = state => state.contacts.items

  export const contactReducer = slice.reducer

  export const {deleteContact, addContact, fetchContactsSuccess, setError, setIsLoading} = slice.actions

  export const selectIsLoading = state => state.contacts.isLoading;







