
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter'
import { Layout } from './Layout/Layout';
// import initialContacts from '../contacts.json';


// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//       return JSON.parse(savedContacts);
//     }else{
//       return initialContacts;
//  }
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts);
  // const [filter, setFilter] = useState('');

  //  useEffect(() => {
  //    localStorage.setItem('contacts', JSON.stringify(contacts));
  //  },[contacts]);

//  const onChangeInput = event => {
//    setFilter(event.target.value.toLocaleLowerCase());
//  };


  // const addName = newName => {
  //   contacts.filter(
  //     contact =>
  //       contact.name.toLocaleLowerCase().trim() ===
  //       newName.name.toLowerCase().trim() ||
  //       contact.number.trim() === newName.number.trim()
  //   ).length
  //     ? alert(`${newName.name}: is already in contacts`)
  //     : setContacts(prevState => [...prevState, newName]);
  //         };
      

  // const filterContacts = () => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  // };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <div>
        <ContactList  />
      </div>
      <GlobalStyle />
    </Layout>
  );
};
   
  
