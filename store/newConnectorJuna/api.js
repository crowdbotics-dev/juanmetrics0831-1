import axios from "axios";
const newConnectorJuna = axios.create({
  baseURL: "http://gggl.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export const apiService = {};