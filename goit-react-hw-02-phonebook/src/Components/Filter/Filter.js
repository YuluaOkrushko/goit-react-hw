import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ onFilter }) => (
  <div className={styles.wrapper}>
    <p className={styles.title}>Find contact</p>
    <input
      className={styles.input}
      type="text"
      name="filter"
      onChange={onFilter}
    ></input>
  </div>
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
export default Filter;
