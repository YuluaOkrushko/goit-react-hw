import React from "react";
import styles from "./friendList.module.css";
import PropTypes from "prop-types";

function FriendsListItem({ avatar, name, isOnline }) {
  const cssClassForStatus = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.list}>
      <span className={cssClassForStatus}></span>
      <img className={styles.image} src={avatar} alt="avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendsListItem;
