import axios from "axios";

// funcion de registro con conexion a la api
export const funcionRegistro = async (registro) => {
  const URL_REGISTRO = "http://localhost:4000/user/register";

  try {
    const response = await axios.post(URL_REGISTRO, registro);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
