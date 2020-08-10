import React from "react";
import styles from "./FeedbackButtons.module.css";
import PropTypes from "prop-types";

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((item) => (
        <button
          className={styles.button}
          type="button"
          name={item}
          onClick={onLeaveFeedback}
          key={item}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default FeedbackButtons;
