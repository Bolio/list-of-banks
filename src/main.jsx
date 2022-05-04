import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import App from "./App";
import configureStore from "./redux/configureStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
