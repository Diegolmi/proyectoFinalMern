

const GetProductos = async () => {
  const url = "https://restapi-nodejsandmysql-productos-production.up.railway.app/api/productos";
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export default GetProductos;
