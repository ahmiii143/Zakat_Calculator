import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider, useSnackbar } from "notistack";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
