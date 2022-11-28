import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <h3>Start now!</h3>
      <Link className="waves-effect waves-light btn-large" to="/login">
        log in
      </Link>
      <Link
        className="waves-effect waves-light btn-large sign-up"
        to="/register"
      >
        sign up
      </Link>
    </div>
  );
};

export default HomeScreen;
