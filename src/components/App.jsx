import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import { fetchContacts } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      {loading && <Loader />}
      {isError && <Error>Error message</Error>}
      {!loading && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
