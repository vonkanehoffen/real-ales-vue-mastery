import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export default {
  ales: () => api.get("ales"),
  ale: (id: string) => api.get(`ales/${id}`),
};
