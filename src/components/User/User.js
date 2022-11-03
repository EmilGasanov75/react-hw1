import styles from "./User.module.css";

function User(props) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="User avatar"
          className={styles.avatar}
          width={125}
          height={125}
        />
        <div className={styles.desc}>
          <p className={styles.name}>{props.username}</p>
          <div className={styles.tagandloc}>
            <p className={styles.tag}>{`@${props.tag}`}</p>
            <a href={`https://www.google.com/maps/place/${props.location}/`} className={styles.location}>{props.location}</a>
          </div>
        </div>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className="label">Following </span>
          <span className="quantity">23</span>
        </li>
        <li>
          <span className="label">Followers </span>
          <span className="quantity">33</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">100k</span>
        </li>
      </ul>
    </div>
  );
}
export default User;
