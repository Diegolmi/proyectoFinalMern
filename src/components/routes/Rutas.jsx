import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../registro/Registro";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default Rutas;
