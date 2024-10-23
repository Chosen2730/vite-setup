import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import AppProvider from "./context.tsx";
import "react-activity/dist/library.css";
import "react-datepicker/dist/react-datepicker.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
