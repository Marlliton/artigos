import { memo, useEffect, useState } from "react";
import styles from "./Sum.module.css";

interface SumProps {
  tittle: string;
  addWishList(item: string): void
}

function ItemComponent({ tittle }: SumProps) {
  return <div>{tittle}</div>;
}

export const Item = memo(ItemComponent);
