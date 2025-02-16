import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InputValue from "./inputValue.jsx";
import CountUp from "./countUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InputValue />
    <hr />
    <CountUp />
  </StrictMode>
);
