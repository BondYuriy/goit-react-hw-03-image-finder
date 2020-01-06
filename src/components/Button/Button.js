import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ addNewPage }) => (
  <button className={styles.btn} type="button" onClick={addNewPage}>
    Load more
  </button>
);

Button.propTypes = {
  addNewPage: PropTypes.func.isRequired,
};

export default Button;
