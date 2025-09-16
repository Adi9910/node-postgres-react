import { getRequest, postRequest, putRequest } from "./ApiModal";
import { toast } from 'react-toastify';

export const getAllUsers = (url: string) => {
  return new Promise(async (resolve) => {
    try {
      const api = await getRequest(url);
      resolve({ status: true, data: api });
      return toast.success("Data fetched successfully!", {autoClose: 2000});
    } catch (err) {
      resolve({ status: false, data: err });
      return toast.error("error occurred", {autoClose: 2000});
    }
  });
};

export const getOneUsers = (url: string) => {
  return new Promise(async (resolve) => {
    try {
      const api = await getRequest(url);
      resolve({ status: true, data: api });
      return toast.success("Data fetched for a user successfully!", {autoClose: 2000});
    } catch (err) {
      resolve({ status: false, data: err });
      return toast.error("error occurred", {autoClose: 2000});
    }
  });
};

export const addUser = (url: string, data: object) => {
  return new Promise(async (resolve) => {
    try {
      const api = await postRequest(url, data);
      resolve({ status: true, data: api });
      return toast.success("Data added successfully!", {autoClose: 2000});
    } catch (err) {
      resolve({ status: false, data: err });
      return toast.error("error occurred", {autoClose: 2000});
    }
  });
};

export const updateUser = (url: string, data: object) => {
  return new Promise(async (resolve) => {
    try {
      const api = await putRequest(url, data);
      resolve({ status: true, data: api });
      return toast.success("Data updated successfully!", {autoClose: 2000});
    } catch (err) {
      resolve({ status: false, data: err });
      return toast.error("error occurred", {autoClose: 2000});
    }
  });
};

export const deleteUser = (url: string) => {
  return new Promise(async (resolve) => {
    try {
      const api = await getRequest(url);
      resolve({ status: true, data: api });
      return toast.success("Data deleted successfully!", {autoClose: 2000});
    } catch (err) {
      resolve({ status: false, data: err });
      return toast.error("error occurred", {autoClose: 2000});
    }
  });
};
