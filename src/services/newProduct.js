import axios from 'axios';
import constante from '../const';


export default (data) =>{
    let token = localStorage.getItem('token');
    console.log("token",token);
 
    return axios.post(constante.url+'create/',data,{
        headers: {
          'Authorization': `Basic ${token}`
        }});
}

