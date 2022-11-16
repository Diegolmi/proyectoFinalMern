import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Carrusel from "../carrusel/Carrusel";
import Navegacion from "../navegacion/Navegacion";
import Tarjetas from "../tarjetas/Tarjetas";
import Tabla from "../tabla/Tabla";

const Home = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const handleAumentar = () => {
    setContador1(contador1 + 1);
  };

  const handleDisminuir = () => {
    setContador1(contador1 - 1);
  };

  useEffect(() => {
    console.log(
      "Se ejecuto el useEffect cuando se renderizo el componente por primera vez"
    );
  }, []);

  useEffect(() => {
    console.log("Se ejecuto el useEffect cuando se renderizo el componente");
  });

  useEffect(() => {
    console.log("se ejecuto el useEffect cuando se modifica nuestra variable");
  }, [contador1, contador2]);

  return (
    <>
      <Navegacion />

      <Button className="btn btn-warning" onClick={handleAumentar}>
        Aumentar
      </Button>
      <Button className="btn btn-success" onClick={handleDisminuir}>
        Disminuir
      </Button>
      <h1>Contador: {contador1}</h1>

      <Button
        className="btn btn-primary"
        onClick={() => setContador2(contador2 + 1)}
      >
        Aumentar
      </Button>
      <Button
        className="btn btn-danger"
        onClick={() => setContador2(contador2 - 1)}
      >
        Disminuir
      </Button>
      <h1>Contador2: {contador2}</h1>

      {/* <Carrusel /> */}
      <Tarjetas />
      <Tabla />
      {/* <h1>Titulo Original</h1>
      <Button> Cambiar el titulo</Button> */}
    </>
  );
};

export default Home;
