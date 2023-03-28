import coreApiClient from "./CoreApi";
import {ILogin} from "../../types/views.type";


export default {
  getBanks() {
    return coreApiClient.sendRequest("get", "payment/institutions", {}, null);
  },
  createPayment(data:any) {
    return coreApiClient.sendRequest("post", "payment/auth-req", data, null);
  },

  validatePayment(data:any) {
    return coreApiClient.sendRequest("post", "payment/create-payment", data, null);
  },

  teste() {
    return coreApiClient.sendRequest("get", "todos/1", {}, null);
  },

  login(data:ILogin) {

    return coreApiClient.sendRequest("post", "user/login", data, null);
  },


  getApplications() {
    return coreApiClient.sendRequest("get", "app", {}, null, true);
  },

  getApplicationRecap(idApp:string) {
    return coreApiClient.sendRequest("get", `stat/${idApp}`, {}, null, true);
  } ,

  createApplication(name:string) {
    return coreApiClient.sendRequest("post", "app", {name_app: name}, null, true);
  },

  generateKeyApplication(id_app:string) {
    return coreApiClient.sendRequest("patch", `app/${id_app}`, {}, null, true);
  }
};
