// import useLocalStorage from "../../hooks/useLocalStorage";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { Application, ApplicationTitle, ListTitle } from "./App.styled";

const App = () => {
  return (
    <Application>
      <ApplicationTitle>Phonebook</ApplicationTitle>
      <ContactForm />

      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Application>
  )
}

export default App;