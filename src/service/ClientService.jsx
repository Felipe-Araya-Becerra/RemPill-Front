import axios from "axios";

const GET_ALL_USERS_URL = "http://localhost:8080/api/users/clients";
const CREATE_USER_URL = "http://localhost:8080/api/users/create/";
const UPDATE_CLIENT_URL = "http://localhost:8080/api/users/updateClient/";
const DELETE_CLIENT_URL = "http://localhost:8080/api/users/delete/"



class ClientService {
  getAllUsers(){
    return axios.get(GET_ALL_USERS_URL);
  }

  getUserById(clientid){
    return axios.get(GET_ALL_USERS_URL + clientid );
  }

  createClient(client){
    return axios.post(CREATE_USER_URL,client);
  }

  updateClient(clientId,client){
    return axios.put(UPDATE_CLIENT_URL+clientId ,client);
  }

  deletClient(clientId){
    return axios.delete(DELETE_CLIENT_URL+clientId)
  }
}

export default new ClientService