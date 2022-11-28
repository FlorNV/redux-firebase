import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import AuthRouter from "./routers/AuthRouter";

function App() {
  return (
    <Provider store={store}>
      <AuthRouter />
    </Provider>
  );
}

export default App;
