import React from "react";
import styles from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <div className={styles.wrapper}>
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  </div>
);
Selection.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
