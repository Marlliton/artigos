import { useState } from "react";
import styles from "./App.module.css";
import { Sum } from "./components/Sum";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 5, 12, 54]);
  
  return (
    <div className={styles.container}>
      <h1>Use Callback</h1>

      <div>
        <h2>Componente pai</h2>
        <p>Use os botões abaixo para alterar o estado do componente pai.</p>

        <div className={styles.count}>{count}</div>
        <div className={styles.buttons}>
          <button onClick={() => setCount(count => (count -= 1))}>Diminuir contador</button>
          <button onClick={() => setCount(count => (count += 1))}>Aumentar contador</button>
        </div>
      </div>
      <div className={styles.filho}>
        <h2>Componente Filho</h2>
        <p>Resultado total da soma</p>
        <Sum numbers={numbers} />

        <button
          onClick={() =>
            setNumbers(state => [...state, Math.floor(Math.random() * numbers.length)])
          }
        >
          Adicionar número a soma
        </button>
      </div>
    </div>
  );
}

export { App };
