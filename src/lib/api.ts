// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://planner-api-bdqj.onrender.com/api", // Replace with your actual backend URL
});

// Automatically attach token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
