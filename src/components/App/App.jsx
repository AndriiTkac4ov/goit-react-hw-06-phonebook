// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { addContact, deleteContact } from "../../redux/contactsSlice";
import { filterList } from "../../redux/filterSlice";
// import useLocalStorage from "../../hooks/useLocalStorage";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { nanoid } from "nanoid";
import { Application, ApplicationTitle, ListTitle } from "./App.styled";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  const isContactNameInList = contactName => {
    return contacts.find(contact => contact.name === contactName);
  }

  const addContactToList = ( name, number, reset) => {
    if (isContactNameInList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    reset();
  }

  const deleteContactFromList = userId => {
    dispatch(deleteContact(userId));
  }

// Filter Zone
  const changeFilter = event => {
    dispatch(filterList(event.currentTarget.value));
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const filteredContacts = getFilteredContacts();

  return (
    <Application>
      <ApplicationTitle>Phonebook</ApplicationTitle>
      <ContactForm
        onSubmit={addContactToList}
      />

      <ListTitle>Contacts</ListTitle>
      <Filter
        value={filter}
        onChange={changeFilter}
      />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContactFromList}
      />
    </Application>
  )
}

export default App;