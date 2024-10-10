import styles from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";
export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactLi}>
      <div className={styles.nameNumbs}>
        <div className={styles.nameNumb}>
          <IoPersonSharp size="24" />{" "}
          <p className={styles.contactName}>{contact.name}</p>
        </div>
        <div className={styles.nameNumb}>
          <FaPhoneAlt size="24" />{" "}
          <p className={styles.contactNumber}>{contact.number}</p>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContactThunk(contact.id))}
        type="submit"
      >
        Delete
      </button>
    </div>
  );
}
