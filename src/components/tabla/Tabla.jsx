import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import GetUsers from "../helpers/GetUsers";

const Tabla = () => {
  const [users, setUsers] = useState([]);

  const getUsersUpdate = async () => {
    GetUsers().then((data) => {
      setUsers(data);
    });
  };
  useEffect(() => {
    getUsersUpdate();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td> <Button>Eliminar</Button> </td>
            </tr>
              </>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tabla;
