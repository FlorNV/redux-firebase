import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nomina";

const Element = ({ element }) => {
  const { id, pago, fecha } = element;
  const dispatch = useDispatch();

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
      <tr>
        <td>{id}</td>
        <td>$ {pago}</td>
        <td>{fechaFormateada}</td>
        <td>
          <button className="btn red" onClick={handleDelete}>
            Borrar
          </button>
        </td>
      </tr>
    </>
  );
};

export default Element;
