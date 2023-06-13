import axios from "axios";
import { API_BASE_URL } from "../Constants/Constants";

class ApiService {
  
  search(data) {
    return axios.get(
      API_BASE_URL + "confluence/search?query=" + data + "&page=1&size=9"
    );
  }

  sharePointSearch(data) {
    return axios.get(
      API_BASE_URL + "sharepoint/graphql/search?query=" + data + "&page=1&size=9"
    );
  }

  updateContent = (id, tabArr, newContent) => {
    if (newContent || newContent.length === 0) {
       return 'No results found!'
    }
    const updatedData = tabArr.map(item => {
      if (item.id === id) {
        return { ...item, content: newContent };
      }
      return item;
    });
    return updatedData;
  };
}

const apiService = new ApiService();
export default apiService;
