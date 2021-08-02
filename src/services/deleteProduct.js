import axios from 'axios';
import constante from '../const';


export default (id) =>{
    let token = localStorage.getItem('token');
    console.log("token",token);
 
    return axios.delete(constante.url+'delete/'+id,{
        headers: {
          'Authorization': `Basic ${token}`
        }});
}

