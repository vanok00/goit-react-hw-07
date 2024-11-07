import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import styles from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import { selectIsLoading } from "../../redux/contactsSliсe.js";
import Loader from "../Loader/Loader.jsx";

export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {/* {isLoading && <h2>Loading...</h2>} */}
      {error && <Loader />}
      <h1 className={styles.book}>Phonebook</h1>
      <ContactForm />

      <SearchBox />
      <ContactList />
    </div>
  );
}
