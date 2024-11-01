import axios, { 
    AxiosInstance,
  } from "axios";
//   import { ApiResponse } from "./types";
  
  export class HttpService {
    private axiosConfig: AxiosInstance;
  
    constructor(uri?: string) {
      uri = !uri ? "https://pokeapi.co/api/v2/berry" : uri;
      this.axiosConfig = axios.create({
        baseURL: uri,
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      });
    }
  
    async get(): Promise<any> {
      try {
        return await this.axiosConfig.get("");
      } catch (e) {
        console.log(e);
        alert("Hubo un error al intentar realiar peticion http");
      }
    }
  }
  