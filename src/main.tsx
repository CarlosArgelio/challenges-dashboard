import * as React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Pages";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <div className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Carlos A. Palacios R.</a>.
    </div>
  </React.StrictMode>
);
