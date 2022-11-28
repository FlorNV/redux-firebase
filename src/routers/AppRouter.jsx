import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppScreen from "../pages/AppScreen";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/app" element={<AppScreen />} />
        <Route path="*" element={<Navigate to="/app" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
