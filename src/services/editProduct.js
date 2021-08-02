import axios from 'axios';
import constante from '../const';


export default (data,id) =>{
    let token = localStorage.getItem('token');
    console.log("token",token);
 
    return axios.put(constante.url+'update/'+id ,data,{
        headers: {
          'Authorization': `Basic ${token}`
        }});
}