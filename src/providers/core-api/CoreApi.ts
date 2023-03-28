
import {baseUrl} from "../../app.config";
import BaseApi from "../BaseApi";

class CoreApi extends BaseApi {
  get baseUrl() {
    return baseUrl;
  }
}

let coreApiClient = new CoreApi();
export default coreApiClient;
