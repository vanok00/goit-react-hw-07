import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectContacts, selectIsLoading } from "../../redux/contactsSliсe";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectNameFilter);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(searchStr.toLowerCase().trim())
  );

  return (
    <div>
      <ul className={styles.contactList}>
        {filteredData.map((contact) => (
          <li key={contact.id}>
            {isLoading && <h2>Loading...</h2>}
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
