import React, { Component } from "react";
import styles from "./App.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

import { v4 as uuid_v4 } from "uuid";
export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuid_v4(),
      name,
      number,
    };
    if (
      this.state.contacts.some(
        (savedContact) => savedContact.name === contact.name
      )
    ) {
      alert(`${contact.name} is already in contacts!`);
    } else
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
  };
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      filter: e.target.value,
    });
  };
  contactFilter = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };
  handleDelete = (e) => {
    const id = e.target.id;
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };
  render() {
    const filteredName = this.contactFilter();
    return (
      <div className={styles.wrapper}>
        <ContactForm onAddContact={this.addContact}></ContactForm>
        <h1 className={styles.title}>Contact</h1>
        {this.state.contacts.length === 0 ? (
          <p className={styles.item}>Contact list is empty!</p>
        ) : (
          <div>
            <Filter onFilter={this.handleSearch}></Filter>
            <ContactList
              contacts={filteredName}
              onDelete={this.handleDelete}
            ></ContactList>
          </div>
        )}
      </div>
    );
  }
}
