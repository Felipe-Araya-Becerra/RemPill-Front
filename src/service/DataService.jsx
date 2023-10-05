import axios from "axios";

const GET_ALL_DATA_URL = "http://localhost:8080/api/data/showdata/";
const CREATE_DATA_URL = "http://localhost:8080/api/data/createdata/";
const UPDATE_DATA_URL = "http://localhost:8080/api/data/updatedata/";

class DataService {
  getAllData() {
    return axios.get(GET_ALL_DATA_URL);
  }

  getDataById(dataId) {
    return axios.get(GET_ALL_DATA_URL + dataId);
  }

  createData(data) {
    return axios.post(CREATE_DATA_URL, data);
  }

  updateData(dataId, data) {
    return axios.put(UPDATE_DATA_URL + dataId, data);
  }
  
}

export default new DataService();
