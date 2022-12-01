import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import { limpiar } from "../actions/nomina";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(limpiar());
    dispatch(logout());
  };

  return (
    <>
      <nav className="teal accent-4 animate__animated animate__fadeIn">
        <div className="nav-wrapper">
          <Link to="/app" className="brand-logo">
            Financial Calc
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/app">App</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button
                className="waves-effect waves-light btn red logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
