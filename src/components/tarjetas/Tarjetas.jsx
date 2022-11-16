import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import GetProductos from "../helpers/GetProductos";

const Tarjetas = () => {
  const [productos, setProductos] = React.useState([]);

  const updateProductos = () => {
    GetProductos().then((data) => {
      setProductos(data);
    });
  };

  React.useEffect(() => {
    updateProductos();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {productos.map((producto) => (
            <Col xs={12} md={4} lg={3} key={producto.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={producto.imagenProducto} />
                <Card.Body>
                  <Card.Title>{producto.nombreProducto}</Card.Title>
                  <Card.Text>{producto.descripcionProducto}</Card.Text>
                  <Button variant="primary">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Tarjetas;
