import { Component } from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

	handleChange = event => {
		const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
	};

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.formLabel} htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            className={styles.inputForm}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={styles.formLabel} htmlFor={this.numberInputId}>
          Number
          <input
            id={this.numberInputId}
            className={styles.inputForm}
            type="tel"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={styles.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;