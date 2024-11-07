import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useId } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const id = useId();
  const value = useSelector(selectNameFilter);

  return (
    <div className={styles.searchBox}>
      <label className={styles.labelForm}>
        <span>Find contacts by name</span>
        <input
          className={styles.inputSearchboxForm}
          name="username"
          type="text"
          id={id}
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Enter  your presumptive name"
        />
      </label>
    </div>
  );
};

export default SearchBox;
