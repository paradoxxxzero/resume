import React from "react";
import ReactDOM from "react-dom/client";
import ThemedApp from "./components/ThemedApp";
import "./i18n";

ReactDOM.createRoot(document.getElementsByTagName("main")[0]).render(
  <React.StrictMode>
    <ThemedApp />
  </React.StrictMode>
);
