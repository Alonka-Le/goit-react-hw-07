import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.container}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
