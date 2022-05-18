import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState(0);

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };
  const manejarCambio2 = (e) => {
    setInput2(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const newFruta = {
      id: input,
      cantidad:0,
      precio: input2,
    };
    onSubmit(newFruta);
  };

  return (
    <form className="frutaform" onSubmit={manejarEnvio}>
      <input
        className="inputnombrefruta"
        type="text"
        placeholder="Escribe el nombre"
        name="text"
        onChange={manejarCambio}
      />
      <input
        className="inputpreciofruta"
        type="number"
        placeholder="Escribe el precio"
        name="text"
        onChange={manejarCambio2}
      />
      <button className="taskbutton">Agregar</button>
    </form>
  );
}


