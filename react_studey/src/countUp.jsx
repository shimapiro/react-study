import React from "react";
import { useState } from "react";
import "./App.css";

function CountUp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>カウント</h1>
      <button onClick={increment}>カウントを上げる</button>
      <p>カウント:{count}</p>
    </>
  );
}

export default CountUp;
