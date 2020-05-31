import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CounterProvider from "./contexts/CounterContext";
import { FLProvider, FetcherProvider } from "./lib";

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider key={Math.random()}>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
