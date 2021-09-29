import axios from "axios";

export const api = axios.create({
    //Endereço base da API, que se repete para todos os métodos
    baseURL: "http://localhost:3000/api/",
    //headers
})