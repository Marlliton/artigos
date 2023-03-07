import { useContext } from "react";
import { CountDownContext } from "../context/CountDownContext";
import styles from "./styles.module.css";

export function CountDown() {
  const {minutes, seconds, start} = useContext(CountDownContext)
  

  return (
    <div className={styles.container}>
      <div className={styles.countDownWrapper}>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <div className={styles.separator}>:</div>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </div>

      <button onClick={start}>Start Count Down</button>
    </div>
  );
}
