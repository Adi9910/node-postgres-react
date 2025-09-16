import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_BASEURL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET method
export const getRequest = async (
    url: string, 
    config?: AxiosRequestConfig) => {
  try {
    const response = await apiClient.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// POST method
export const postRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await apiClient.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// PUT method
export const putRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await apiClient.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// PATCH method
export const patchRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await apiClient.patch(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};