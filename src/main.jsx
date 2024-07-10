import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./slices/Store.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
