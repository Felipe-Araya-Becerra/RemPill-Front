import axios from "axios";

const GET_ALL_REMEMBERS_URL = "http://localhost:8080/api/rem/findrem/";
const CREATE_REMEMBER_URL = "http://localhost:8080/api/rem/createrem/";
const UPDATE_REMEMBER_URL = "http://localhost:8080/api/rem/updaterem/";
const DELETE_REMEMBER = "http://localhost:8080/api/rem/deleterem/";

class RememberService {
  getAllRemembers() {
    return axios.get(GET_ALL_REMEMBERS_URL);
  }

  getRememberById(rememberId) {
    return axios.get(GET_ALL_REMEMBERS_URL + rememberId);
  }

  createRemember(remember) {
    return axios.post(CREATE_REMEMBER_URL, remember);
  }

  updateRemember(rememberId, remember) {
    return axios.put(UPDATE_REMEMBER_URL + rememberId, remember);
  }
  deleteRemember(rememberId) {
    return axios.delete(DELETE_REMEMBER + rememberId);
  }
}

export default new RememberService();
