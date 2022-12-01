import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nomina";

const Element = ({ element }) => {
  const { id, pago, fecha } = element;
  const dispatch = useDispatch();

  const pagoFormateado = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(pago);

  let fechaFormateada;
  if (fecha.seconds) {
    const date = fecha.toDate();
    fechaFormateada = date.toLocaleDateString();
  } else {
    fechaFormateada = fecha.toLocaleDateString();
  }

  const handleDelete = () => {
    dispatch(borrarRegistro(id));
  };

  return (
    <>
      <tr className="animate__animated animate__fadeInUp">
        <td>{id}</td>
        <td>{pagoFormateado}</td>
        <td>{fechaFormateada}</td>
        <td>
          <button className="btn red" onClick={handleDelete}>
            <i className="material-icons">delete_forever</i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Element;
