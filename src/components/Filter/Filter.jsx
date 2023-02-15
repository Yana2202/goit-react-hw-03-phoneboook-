import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const searchId = shortid.generate();
const Filter = ({ value, onChange }) => (
  <>
    <label htmlFor={searchId} className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        id={searchId}
      />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;