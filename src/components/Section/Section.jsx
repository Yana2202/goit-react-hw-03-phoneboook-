import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.mainTitle}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;