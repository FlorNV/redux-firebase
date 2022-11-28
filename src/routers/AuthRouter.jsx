import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { login } from "../actions/auth";
import { firebase } from "../firebase/config-firebase";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import ResgisterScreen from "../pages/ResgisterScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AuthRouter = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/* PublicRouter */}
        <Route
          path="/home"
          element={
            <PublicRouter log={log}>
              <HomeScreen />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRouter log={log}>
              <LoginScreen />
            </PublicRouter>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRouter log={log}>
              <ResgisterScreen />
            </PublicRouter>
          }
        />
        {/* PrivateRouter */}
        <Route
          path="/*"
          element={
            <PrivateRouter log={log}>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;
