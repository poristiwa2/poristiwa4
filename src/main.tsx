import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
if (root) {
  try {
    createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (e) {
    root.innerHTML = '<div style="padding:40px;text-align:center;font-family:sans-serif"><h1>Terjadi Kesalahan</h1><p>' + String(e) + '</p></div>';
  }
}
