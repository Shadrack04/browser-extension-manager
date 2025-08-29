import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "../context/app-context.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
