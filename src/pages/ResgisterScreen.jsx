import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";
import LoginScreen from "./LoginScreen";

const ResgisterScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const re = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (email.trim() === "" || !re.test(email.trim())) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }
    dispatch(register(email, password, username));
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <hr />
      <div className="row">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row container">
            <div className="input-field col s12">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                id="icon_username"
                type="text"
                className="validate"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <label htmlFor="icon_username">Username</label>
            </div>
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
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_password2"
                type="password"
                className="validate"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
              <label htmlFor="icon_password2">Confirm password</label>
            </div>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <hr />
          <Link to="/login" element={<LoginScreen />}>
            Login into account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResgisterScreen;
