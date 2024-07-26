import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onDelete = (ContactId) => {
    dispatch(deleteContact(ContactId));
  };
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <FaUser size="14" className={css.svg} />
          {name}
        </li>

        <li className={css.item}>
          <FaPhone size="14" className={css.svg} />
          {number}
        </li>
      </ul>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
