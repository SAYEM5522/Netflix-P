import axios from "axios";

const instanc = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instanc;
