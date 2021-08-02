import axios from "axios";
import constante from '../const';
const API_URL = "http://127.0.0.1:8000/api/";




const getUser = () =>{
    let token = localStorage.getItem('token');
    console.log("token",token);
    const bodyParameters = {
        token: token
     };
    return axios.post(constante.url+'get_user/',bodyParameters);
}







export default {
  getUser
};