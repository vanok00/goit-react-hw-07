import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBox}>
      <label className={styles.labelForm}>
        <span>Find contacts by name</span>
        <input
          className={styles.inputSearchboxForm}
          name="username"
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Enter  your presumptive name"
        />
      </label>
    </div>
  );
};

export default SearchBox;
