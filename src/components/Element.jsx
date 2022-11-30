import React from "react";

const Element = ({ element }) => {
  const { id, pago, fecha } = element;

  let fechaFormateada;
  if (fecha.seconds) {
    const date = fecha.toDate();
    fechaFormateada = date.toLocaleDateString();
  } else {
    fechaFormateada = fecha.toLocaleDateString();
  }

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>$ {pago}</td>
        <td>{fechaFormateada}</td>
        <td><button></button></td>
      </tr>
    </>
  );
};

export default Element;
