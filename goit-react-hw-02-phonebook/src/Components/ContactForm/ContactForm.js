import React, { Component } from "react";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = { id: "", name: "", number: "" };
  handleChangeNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className={styles.title}>Phonebook</h1>
        <label>
          <div className={styles.wrapper}>
            <h3 className={styles.title_item}>Name</h3>
            <input
              className={styles.input}
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>
        </label>
        <label>
          <div className={styles.wrapper}>
            <h3 className={styles.title_item}>Number</h3>
            <input
              className={styles.input}
              type="tel"
              placeholder="000-00-00"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              value={this.state.number}
              onChange={this.handleChangeNumber}
            />{" "}
          </div>
        </label>
        <div className={styles.button_wrapper}>
          <button
            className={styles.button}
            type="submit"
            disabled={
              this.state.name === "" || this.state.number === "" ? true : false
            }
          >
            Add contact
          </button>
        </div>
      </form>
    );
  }
}
