import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import Swal from "sweetalert2";

const Registro = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TAREA: Crear un estado para el campo de confirmar contraseña
  // Validar que la contraseña y la confirmación sean iguales
    // Mostrar un mensaje de error si no son iguales
    // Mostrar un mensaje de éxito si son iguales
    // Limpiar los campos 
    // Validaciones con expresiones regulares
    // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email === "a@a.com" && password === "123456") {
      Swal.fire({
        icon: "success",
        title: "Registrado",
        text: "Registro exitoso",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <>
    <h1>Esto es un registro</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese su nombre"
          />
          <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Ingrese su Apellido"
          />
        </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirme Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme su password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Registro;
