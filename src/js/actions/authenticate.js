
import axios from 'axios';
const URL = 'http://127.0.0.1:8000';
//https://coursework.vschool.io/react-token-authentication-pt-2/
export function loginAuth(data) {
    return (dispatch) => {
        //Begin Request
        dispatch({type: 'FETCH_REQUEST'});
        return axios
            .post(`${URL}/api-token-auth/`, data, {
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            })  
            .then((response)=>{
                let token = response.data.token; 
                localStorage.setItem('token', token);        
                dispatch({
                    type:'FETCH_LOGIN', 
                    user:JSON.parse(data), 
                    isAuthenticated:true, 
                });
            })
            .catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'FETCH_ERROR', error:newError});
                } 
            });
    };
}

export function logoutAuth(){  
    localStorage.removeItem('token');
    return (dispatch) => {
        //Begin Request
        dispatch({type: 'FETCH_LOGOUT'});
    }
}

export function getAuthorization() {
    axios.interceptors.request.use((config)=>{  
        const token = localStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    })
}