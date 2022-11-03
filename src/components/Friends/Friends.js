import styles from "./Friends.module.css";
import React, {useState} from 'react'
function Friends(props) {
  const[isActive, setIsActive] = useState(false)
  for (let i = 0; i < props.array[i].length; i++) {
    if (props.array[i].state === "online") {
      const isActiveFunc = () => {
        setIsActive(!isActive)
      }
      isActiveFunc()
    }
  }
  
  return (
    <div className={styles.wrap}>
      
      <h2>Friends</h2>
      <ul className={styles.list}>
      <li className={styles.item}>
        <img className={styles.avatar} src={props.array[0].avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{props.array[0].name}</p>
        <p className={styles.tag}>{`@${props.array[0].tag}`}</p>
        <p className={styles[props.array[0].status]}>{props.array[0].status}</p>
      </li>
      <li className={styles.item}>
        <img className={styles.avatar} src={props.array[1].avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{props.array[1].name}</p>
        <p className={styles.tag}>{`@${props.array[1].tag}`}</p>
        <p className={styles[props.array[1].status]}>{props.array[1].status}</p>
      </li>
      <li className={styles.item}>
        <img className={styles.avatar} src={props.array[2].avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{props.array[2].name}</p>
        <p className={styles.tag}>{`@${props.array[2].tag}`}</p>
        <p className={styles[props.array[2].status]}>{props.array[2].status}</p>
        
      </li>
    </ul>
    </div>
  );
}

export default Friends;
