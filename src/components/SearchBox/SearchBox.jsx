import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.input}
      />
    </div>
  );
}
