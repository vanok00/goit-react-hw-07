import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contactsSliсe";
// import { selectNameFilter } from "../../redux/filtersSlice";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectIsError);
  // const searchStr = useSelector(selectNameFilter);
  // const filteredData = contacts.filter((contact) =>
  //   contact.name.toLowerCase().trim().includes(searchStr.toLowerCase().trim())
  // );

  return (
    <div>
      <ul className={styles.contactList}>
        {loading && <Loader />}
        {error && <h2>LOADING OR AN ERROR</h2>}
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
// {error && <h2>LOADING OR AN ERROR</h2>}
