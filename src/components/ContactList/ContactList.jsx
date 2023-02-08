// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { ContactsList } from "./ContactList.styled";
import ContactItem from '../ContactItem/ContactItem';

// import { getContacts, getFilter } from "../../redux/selectors";
// import { filterList } from "../../redux/filterSlice";

export default function ContactList() {
    const contacts = useSelector(getContacts);

    return (
        <ContactsList>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ContactsList>
    )
}
