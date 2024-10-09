import axios from "axios";
import { fetchContactsSuccess } from "./contactsSliсe";

axios.defaults.baseURL = 'https://6706b946a0e04071d22809d7.mockapi.io'

export const fetchContacts = () => async dispatch => {
const {data} = await axios.get('/contacts')
dispatch(fetchContactsSuccess(data));
}