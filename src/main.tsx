import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");
const fallbackEl = document.getElementById("root-fallback");

function showError(msg: string) {
  if (rootEl) {
    rootEl.innerHTML =
      '<div style="padding:40px;text-align:center;font-family:sans-serif;max-width:600px;margin:0 auto">' +
      '<h1 style="color:#dc2626;font-size:24px">Poristiwa</h1>' +
      '<p style="color:#666;margin-top:16px">' + msg + '</p>' +
      '</div>';
  }
  if (fallbackEl) fallbackEl.style.display = "none";
}

window.onerror = function (msg) {
  showError("Error: " + String(msg));
};

window.addEventListener("unhandledrejection", function (e) {
  showError("Promise error: " + String(e.reason));
});

if (rootEl) {
  try {
    const root = createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    if (fallbackEl) fallbackEl.style.display = "none";
  } catch (e) {
    showError("Init error: " + String(e));
  }
}
