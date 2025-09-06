import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StorageNoteProvider } from "./context/StorageNoteCotext.tsx";
import { SelectCategoryProvider } from "./context/SelectCategoryContext.tsx";

createRoot(document.getElementById("root")!).render(
  <SelectCategoryProvider>
    <StorageNoteProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </StorageNoteProvider>
  </SelectCategoryProvider>
);
