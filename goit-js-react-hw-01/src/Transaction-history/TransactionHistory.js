import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

function Transactions({ items }) {
  const limit = 6;
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.name}>Type</th>
          <th className={styles.name}>Amount</th>
          <th className={styles.name}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          (transaction, index) =>
            index < limit && (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Transactions;
