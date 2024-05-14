import React, {useState} from 'react';
import './App.css';
import ContactList, {dummyContacts} from './components/ContactList';
import ContactRow from './components/ContactRow';





export default function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("Contacts", contacts)

  return (
    <>
      <ContactList />
    </>
  );
}
