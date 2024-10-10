import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6706b946a0e04071d22809d7.mockapi.io'
export const fetchContacts = createAsyncThunk('fetchData', async(_,thunkApi) =>{
    try {
        const {data} = await axios.get('/contacts')  
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactThunk = createAsyncThunk('deleteContact', async(id,thunkApi) =>{
    try {
        const {data} = await axios.delete(`/contacts/${id}`)  
        return data.id
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactThunk = createAsyncThunk('addContact', async(body,thunkApi) =>{
    try {
        const {data} = await axios.post(`/contacts`, body);  
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

// export const fetchContacts = () => async dispatch => {
//    try {
//     dispatch(setIsLoading(true))
//     const {data} = await axios.get('/contacts')
//     dispatch(fetchContactsSuccess(data));
//    } catch  {
//     dispatch(setError(true))
//    }
// }

// export const deleteContactThunk = id => async dispatch => {
//     const {data} = await axios.delete(`/contacts/${id}`)
//     dispatch(deleteContact(data.id));
//     }

    // export const addContactThunk = body => async dispatch => {
    //     const {data} = await axios.post(`/contacts`, body)
    //     dispatch(addContact(data));
    //     }

   