import React from "react";
import { useSelector } from "react-redux";
import Element from "../components/Element.jsx";
import FormAdd from "../components/FormAdd.jsx";
import Navbar from "../components/Navbar.jsx";
import "./AppScreen.css";

const AppScreen = () => {
  const username = useSelector((state) => state.auth.displayName);
  const nomina = useSelector((state) => state.nomina.data);

  return (
    <>
      <Navbar />
      <div className="app container animate__animated animate__backInUp">
        <h1 className="center">Hola {username.toUpperCase()}</h1>
        <hr />
        <FormAdd />
        <table className="animate__animated animate__backInUp animate__delay-1s">
          <thead>
            <tr>
              <th>ID</th>
              <th>Pago</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {nomina.map((element) => (
              <Element key={element.id} element={element} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
