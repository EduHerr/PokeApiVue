import axios, { 
    AxiosInstance,
  } from "axios";
//   import { ApiResponse } from "./types";
  
  export class HttpService {
    private axiosConfig: AxiosInstance;
  
    constructor() {
      this.axiosConfig = axios.create({
        baseURL: "https://",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      });
    }
  
    async get(uri: string): Promise<any> {
      try {
        return await this.axiosConfig.get(uri);
      } catch (e) {
        console.log(e);
        alert("Hubo un error al intentar realiar peticion http");
      }
    }
  }
  