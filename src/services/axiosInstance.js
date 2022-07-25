import queryString from "querystring";
import axios from "axios";
const baseURL = "http://localhost:8084/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 3000,
})

export default axiosInstance;