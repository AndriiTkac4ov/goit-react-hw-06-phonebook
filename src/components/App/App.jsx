// import useLocalStorage from "../../hooks/useLocalStorage";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { Application, ApplicationTitle, ListTitle } from "./App.styled";

const App = () => {
// Filter Zone
  // const changeFilter = event => {
  //   (filterList(event.currentTarget.value));
  // }

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // }

  // const filteredContacts = getFilteredContacts();

  return (
    <Application>
      <ApplicationTitle>Phonebook</ApplicationTitle>
      <ContactForm />

      <ListTitle>Contacts</ListTitle>
      <Filter
        // value={filter}
        // onChange={changeFilter}
      />
      <ContactList />
    </Application>
  )
}

export default App;