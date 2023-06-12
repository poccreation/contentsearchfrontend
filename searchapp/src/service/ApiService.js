import axios from "axios";
import { API_BASE_URL } from "../Constants/Constants";

class ApiService {
  search(data) {
    return axios.get(
      API_BASE_URL + "confluence/search?query=" + data + "&page=1&size=9"
    );
    //return  axios.get('http://localhost:9080/boogle/v1/confluence/search?query=Transformers&page=1&size=9');
  }
}

const apiService = new ApiService();
export default apiService;
