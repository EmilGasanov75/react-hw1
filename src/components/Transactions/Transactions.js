import styles from "./Transactions.module.css";

function Transactions(props) {
  return (
    <div className={styles.wrap}>
      <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{props.log[0].type}</td>
      <td>{props.log[0].amount}</td>
      <td>{props.log[0].currency}</td>
    </tr>
    <tr>
    <td>{props.log[1].type}</td>
    <td>{props.log[1].amount}</td>
    <td>{props.log[1].currency}</td>
    </tr>
  </tbody>
</table>
    </div>

  );
}
export default Transactions;
