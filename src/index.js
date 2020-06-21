import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

const WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const WithStore = () => (
  <Provider store={store}>
    <WithRouter />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <WithStore />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
