import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "../State/countState";

export const Content = () => {
  const [count, setCount] = useRecoilState(countState);
  console.log("===>", count);

  const countPlus = () => {
    setCount(count + 1);
  };

  const countMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>number : {count}</p>
      <button onClick={countPlus}>+</button>
      <button onClick={countMinus}>-</button>
    </>
  );
};
