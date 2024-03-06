import { get } from "./BaseService";

export const getHelloWorld = () => {
  return get("/");
};
