import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { googleLogin, emailAndPasswordLogin } from "../actions/auth";
import ResgisterScreen from "./ResgisterScreen";
import { useEffect } from "react";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    const re = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (email.trim() === "" || !re.test(email.trim())) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className="container animate__animated animate__fadeIn">
      <h1>Login</h1>
      <hr />
      <div className="row">
        <form onSubmit={handleEmailLogin} className="col s12">
          <div className="row container">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="icon_email"
                type="email"
                className="validate"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <label htmlFor="icon_email">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_password"
                type="password"
                className="validate"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <label htmlFor="icon_password">Password</label>
            </div>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <hr />
          <GoogleButton onClick={handleGoogleLogin} />
          <Link to="/register" element={<ResgisterScreen />}>
            Register in the platform
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
