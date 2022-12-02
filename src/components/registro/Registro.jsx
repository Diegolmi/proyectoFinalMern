import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import Swal from "sweetalert2";
import { funcionRegistro } from "../../api/registro.api";
const Registro = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleSubmit = (e) => {
     e.preventDefault();

     const data = {
        name,
        lastName,
        email,
        password,
        confirmPassword
      }

      const response = funcionRegistro(data);
      console.log(response);


    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Registrado",
        text: "Registro exitoso",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "hay algun error en tu registro",
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
