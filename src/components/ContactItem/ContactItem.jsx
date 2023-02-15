import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contactsItem}>
      <p className={styles.contactsText}>
        {name}: <span>{number}</span>
      </p>

      <button
        className={styles.contactsBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
