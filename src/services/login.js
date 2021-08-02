import axios from 'axios';
import constante from '../const';

export default (data) => {
    // console.log(data,constante.url);
    return axios.post(constante.url+"login/",data);
}