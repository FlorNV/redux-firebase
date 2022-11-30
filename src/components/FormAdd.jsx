import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const dispatch = useDispatch();
  const [viewForm, setViewForm] = useState(false);
  const [pago, setPago] = useState({
    cantidad: 0,
    horas: 0,
  });
  const { cantidad, horas } = pago;

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setPago({ ...pago, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const total = cantidad * horas;
    dispatch(crearRegistro(total));
    setPago({
      cantidad: 0,
      horas: 0,
    });
  };

  return (
    <div>
      <button className="btn" onClick={handleAdd}>
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <div>
          <input
            type="text"
            name="cantidad"
            placeholder="Pago por hora"
            value={cantidad}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="horas"
            placeholder="Cantidad de horas"
            value={horas}
            onChange={handleChange}
          />
          <button className="btn purple" onClick={handleSave}>
            Calcular y guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
