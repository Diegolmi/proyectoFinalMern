import axios from "axios";

// funcion de login con conexion a la api

export const funcionLogin = async (login) => {
  console.log(login)
  const BASE_URL = "http://localhost:4000/user/login";

  try {
    const response = await axios.post(BASE_URL, login)
    console.log(response)
    } catch (error) {
    console.error(error)
    }
};

export const logout = async () => {
    const BASE_URL = "http://localhost:4000/user/logout"}



