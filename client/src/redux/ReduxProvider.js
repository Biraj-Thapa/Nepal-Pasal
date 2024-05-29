"use client";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default ReduxProvider;
