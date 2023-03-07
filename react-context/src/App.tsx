import styles from "./App.module.css";
import { CountDown } from "./CountDown";
import { CountDownProvider } from "./context/CountDownContext";
export function App() {
  return (
    <div className={styles.container}>
      <h1>
        <span>CountDown</span>
      </h1>

      <CountDownProvider>
        <CountDown />
      </CountDownProvider>
    </div>
  );
}
