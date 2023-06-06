import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { StickeriaApp } from "./StickeriaApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StickeriaApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
