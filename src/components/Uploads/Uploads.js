import styles from "./Uploads.module.css";

function Uploads(props) {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.title}>Uploads</h2>

      <ul className={styles.statlist}>
        <li className={styles.item}>
          <span className={styles.label}>.png </span>
          <span className={styles.percentage}>{`${props.stats[0]}%`}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.mp3 </span>
          <span className={styles.percentage}>{`${props.stats[1]}%`}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.zip </span>
          <span className={styles.percentage}>{`${props.stats[2]}%`}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.mp4 </span>
          <span className={styles.percentage}>{`${props.stats[3]}%`}</span>
        </li>
      </ul>
    </div>
  );
}
export default Uploads;
