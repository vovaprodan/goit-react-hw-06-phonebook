import React from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch , useSelector} from 'react-redux';
import { addContacts, addFilter , filterRedux, contactsRedux, deleteContact} from '../redux/contactsRedux'
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterRedux);
  const contacts = useSelector(contactsRedux);
  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value))
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.name.value;
    const password = form.elements.number.value;
    const contact = { name: login, password: password, id: nanoid() };
    form.reset();
    contacts.find(contact => contact.name === login)
      ? alert(`${login} is already in contacts`)
      : dispatch(addContacts(contact))
      
   
  }
  const onClickButton = id => {
    dispatch(deleteContact(id)) 
  }
  const normalisFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(normalisFilter)
  )
  return (
    
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList data={filterContacts} onDeleteConcat={onClickButton} />
    </div>
  );
  
}
export default App;