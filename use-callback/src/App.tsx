import { useCallback, useState } from "react";
import styles from "./App.module.css";
import { Item, Sum } from "./components/Sum";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [wishList, setWishList] = useState<string[]>([]);

  function addItem() {
    setItems(state => [...state, `Item ${items.length}`]);
  }

  function addWishList(item: string) {
    setWishList(state => [...state, item])
  }

  return (
    <div className={styles.container}>
        <button onClick={addItem}>Adicionar número para soma 2</button>
        {items.map(item => {
          return <Item addWishList={addWishList} tittle={item} key={item} />
        })}
    </div>
  );
}

export { App };
