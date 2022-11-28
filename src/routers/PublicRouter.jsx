import React from "react";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ log, children }) => {
  // si esta logueado (log==true) navega a "/"
  return !log ? children : <Navigate to="/" />;
};

export default PublicRouter;
