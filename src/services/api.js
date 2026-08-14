import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginCall = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const registerCall = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export default api;
