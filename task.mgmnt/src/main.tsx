// src: src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Auth0ProviderWithHistory from "./context/Auth0ProviderWithHistory";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);
