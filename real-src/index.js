import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./rtk/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
