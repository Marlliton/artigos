import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export function CountDown() {
  const [startTimer, setStartTimer] = useState(0);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  function diffInSeconds(startDate: Date): number {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - startDate.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    return diffInSeconds;
  }

  useEffect(() => {
    let interval: number;

    if (startTimer != 0) {
      const startDate = new Date()
      interval = setInterval(() => {
        const totalSeconds = startTimer ? startTimer * 60 : 0;
        const diff = diffInSeconds(startDate);
        const currentSeconds = totalSeconds - diff;
        const minutesAmount = Math.floor(currentSeconds / 60);
        const secondsAmount = currentSeconds % 60;

        if (diff > totalSeconds) {
          clearInterval(interval);
        } else {
          setMinutes(String(minutesAmount).padStart(2, "0"));
          setSeconds(String(secondsAmount).padStart(2, "0"));
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval)
    }
  }, [startTimer]);

  function handleClick() {
    setStartTimer(10);
  }

  return (
    <div className={styles.container}>
      <div className={styles.countDownWrapper}>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <div className={styles.separator}>:</div>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </div>

      <button onClick={handleClick}>Start Count Down</button>
    </div>
  );
}
