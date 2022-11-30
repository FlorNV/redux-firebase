import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

export const crearRegistro = (pago) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const data = {
      fecha: new Date(),
      pago,
    };
    const ref = await db.collection(`${uid}/nominas/nomina`).add(data);
    const id = await ref.id;
    const newData = {
      ...data,
      id,
    };
    console.log(newData);
    dispatch(crear(newData));
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};

export const crear = (data) => {
  return {
    type: types.nominaAdd,
    payload: data,
  };
};
