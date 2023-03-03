import styles from "./App.module.css";
import { CountDown } from "./CountDown";
export function App() {
  return (
    <div className={styles.container}>
      <h1>
        <span>CountDown</span>
      </h1>

      <CountDown />
    </div>
  );
}
