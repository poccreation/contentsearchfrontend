import axios from "axios";
import { API_BASE_URL } from "../Constants/Constants";

class ApiService {
  search(data) {
    const url = API_BASE_URL + "confluence/search?query";
    // Specifying headers in the config object
    const headers = { "content-type": "application/json" };
    return axios.post(url, data, headers);
    //return  axios.get('http://localhost:9080/boogle/v1/confluence/search?query=Transformers&page=1&size=9');
  }
}

const apiService = new ApiService();
export default apiService;
