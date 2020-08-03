import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
  return (
    <section className={styles.upper_wrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {stats.map((stat) => (
            <li key={stat.id} className={styles.li}>
              <span className={styles.label}>{stat.label}</span>
              <p className={styles.percentage}>{stat.percentage}%</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
Statistics.defaultProps = {
  title: "upload stats",
};
export default Statistics;
