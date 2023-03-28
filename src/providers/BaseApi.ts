import axios, {AxiosError, AxiosResponse} from "axios";
import Qs from "qs";
import {store} from "../utils/security";

class BaseApi {
  _checkCallMethod(method: string) {
    return ["get", "post", "put", "patch", "delete"].includes(method);
  }

  _checkCallPath(path: string) {
    if (typeof path !== "string" || path === "") {

      return false;
    }
    // if (this.baseUrl !== "" && !path.startsWith("/")) {
    //   return false;
    // }
    if (this.baseUrl === "" && !path.startsWith("http")) {
      return false;
    }
    return true;
  }

  _getFullUrl(path: string) {
    return this.baseUrl + path;
  }

  _successHandler(response:AxiosResponse) {
    return Promise.resolve(response.data);
  }

  _errorHandler(error: AxiosError) {
    return Promise.reject(error.response);
  }

  get baseUrl() {
    return "";
  }

  async sendRequest(method: string, path:string, payload:any, headers :any, auth:boolean=false) {
    // Method check
    let isCallMethodValid = this._checkCallMethod(method);
    if (!isCallMethodValid) {
      window.console.error(`[Error] Call method not valid: ${method}`);
      return;
    }

    // Path check
    let isCallPathValid = this._checkCallPath(path);
    if (!isCallPathValid) {
      console.log("---path ",path, 'value ', this.baseUrl)
      window.console.error(`[Error] Call path not valid: ${path}`);
      return;
    }

    // Base axios options
    // let options:any

     let options:any = {
      method,
      url: this._getFullUrl(path),
      // paramsSerializer: function (params: object) {
      //   return Qs.stringify(params, { indices: false });
      // },
      headers: { "Content-Type": "application/json" },
    };

    // Extra headers


    if (headers) {

      Object.keys(headers).forEach((header:string) => {
        options.headers[header] = headers[header];
      });
    }

    // Params/data axios options
    if (method === "get") {
      options.params = payload;
    } else {
      options.data = payload;
    }

  if(auth) options.headers.Authorization = `Bearer ${store.get("token")}`;

    // Effective axios call
    return axios(options).then(this._successHandler).catch(this._errorHandler);
  }
}

export default BaseApi;
