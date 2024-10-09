import { createSlice } from "@reduxjs/toolkit"

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
      },
        deleteContact: (state, action) => {
            state.items= state.items.filter(contact => contact.id !== action.payload)
        },
        addContact: (state, action) => {
          state.items.push(action.payload);
        }
    },
  })

export const selectContacts = state => state.contacts.items

  export const contactReducer = slice.reducer

  export const {deleteContact, addContact, fetchContactsSuccess} = slice.actions








