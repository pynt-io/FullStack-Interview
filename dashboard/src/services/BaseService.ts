import axios, { AxiosRequestConfig } from "axios";
const BASE = process.env.REACT_APP_API_BASE_URL;
const instance = axios.create({
  baseURL: BASE,
  headers: {
    "Content-type": "application/json",
  },
});

export async function request(path: string, config?: AxiosRequestConfig) {
  return instance(path, {
    ...config,
  });
}

export async function get(path: string, config?: AxiosRequestConfig) {
  return request(path, { ...config, method: "get" });
}

export async function post(
  path: string,
  params: any,
  config?: AxiosRequestConfig
) {
  return request(path, {
    ...config,
    method: "post",
    data: JSON.stringify(params),
  });
}

export async function put(
  path: string,
  params: any,
  config?: AxiosRequestConfig
) {
  return request(path, {
    ...config,
    method: "put",
    data: JSON.stringify(params),
  });
}

export async function patch(
  path: string,
  params?: any,
  config?: AxiosRequestConfig
) {
  return request(path, {
    ...config,
    method: "patch",
    data: params ? JSON.stringify(params) : undefined,
  });
}

export async function httpDelete(
  path: string,
  params: any,
  config?: AxiosRequestConfig
) {
  return request(path, {
    ...config,
    method: "delete",
    data: JSON.stringify(params),
  });
}
