import React, { useState } from "react";
import "./inputValue.css";

function InputValue() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>入力項目</h1>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="名前を入力してください" />
      <p>名前：{inputValue}</p>
    </>
  );
}

export default InputValue;
