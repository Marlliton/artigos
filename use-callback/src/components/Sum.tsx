import { useEffect, useState } from "react";
import styles from "./Sum.module.css"

interface SumProps {
  numbers: number[];
}

export function Sum({ numbers }: SumProps) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calc()
  }, [numbers]);
  
  function calc() {
    console.log("CALCULANDO RESULTADO")
    const result = numbers.reduce((acc, currentNumber) => {
      return (acc += currentNumber);
    }, 0);
    setTotal(result);
  }

  return <div className={styles.total}>{total}</div>;
}
