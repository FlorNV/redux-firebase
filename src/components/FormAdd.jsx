import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";
import M from "../../node_modules/materialize-css/dist/js/materialize";
import "./FormAdd.css";

const FormAdd = () => {
  const dispatch = useDispatch();
  const [viewForm, setViewForm] = useState(false);
  const [pago, setPago] = useState({
    cantidad: "",
    horas: "",
  });
  const { cantidad, horas } = pago;

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setPago({ ...pago, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (cantidad && horas) {
      const total = cantidad * horas;
      dispatch(crearRegistro(total));
      setPago({
        cantidad: "",
        horas: "",
      });

      M.toast({ html: "Guardado!" });
    } else {
      M.toast({ html: "Revisa los campos!" });
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleAdd}>
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <div className="row">
          <div class="input-field col s6">
            <input
              id="cantidad_pago"
              type="text"
              name="cantidad"
              value={cantidad}
              onChange={handleChange}
            />
            <label for="cantidad_pago">Pago por hora</label>
          </div>
          <div className="input-field col s6">
            <input
              id="cantidad_horas"
              type="text"
              name="horas"
              value={horas}
              onChange={handleChange}
            />
            <label for="cantidad_horas">Cantidad de horas</label>
          </div>
          <button className="btn purple" onClick={handleSave}>
            Calcular y guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
