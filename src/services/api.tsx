import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3002", // Use http ao invés de https para localhost
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;