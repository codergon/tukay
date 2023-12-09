import "./utils/axios";
import "./styles/index.scss";
import * as React from "react";
import "@radix-ui/themes/styles.css";
import * as ReactDOM from "react-dom/client";
import Providers from "./contexts/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
