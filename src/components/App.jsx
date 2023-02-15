import { Component } from 'react';
import shortid from 'shortid';
import Section from './Section/Section';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

    addContact = (name, number) => {
		const contact = {
			id: shortid.generate(),
			name,
			number,
		};

		const findContact = this.state.contacts.find(contact =>
			contact.name.toLowerCase().includes(name.toLowerCase())
		);

		findContact
			? alert(`${name} is already in contact`)
			:this.setState(prevState => ({contacts: [contact, ...prevState.contacts],
      }));
      };
       componentDidMount() {
    const saveContact = localStorage.getItem('contacts');
    if (saveContact) {
      this.setState({ contacts: JSON.parse(saveContact) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }  
    deleteContact = Id => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== Id),
          }));
        };
  
    changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  render() {
    const { filter } = this.state;
    return (
      <div className="App">
        <Section title="PhoneBook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;