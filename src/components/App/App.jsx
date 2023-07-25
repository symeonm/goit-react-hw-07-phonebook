import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import Filter from '../filter/Filter';

export function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
