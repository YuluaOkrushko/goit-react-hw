import React from "react";
import styles from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <p className={styles.notification}>{message} :(</p>
);

export default Notification;
