import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handlechange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>入力フィールド</h1>
      <input type="text" value={inputValue} onChange={handlechange} placeholder="ここに入力" />
      <p>入力された値：{inputValue}</p>
    </>
  );
}

export default App;
