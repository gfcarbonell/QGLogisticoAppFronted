import React from 'react';
import axios from 'axios';


class Main extends React.Component {

    setInputUsername = (element)=>{
        this.inputUsername = element;
        this.inputPassword = element;
    }
    setInputPassword = (element)=>{
        this.inputPassword = element;
    }
    handleSubmit = (event)=>{
        event.preventDefault();

        let data = JSON.stringify({
            username: this.inputUsername.value,
            password: this.inputPassword.value,
        })
        console.log(data);
        //axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"; <CSRFToken />
        //axios.defaults.xsrfCookieName = "csrftoken";, {
         /* {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }  */
        //let csrftoken = Cookies.get('csrftoken');
        //axios.defaults.xsrfCookieName = csrftoken
        //axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.post('http://localhost:8000/api-token-auth/', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            if (error.response) {
                console.log(error.response.headers);
            } 
            else if (error.request) {
                console.log(error.request);
            } 
            else {
                console.log(error.message);
            }
            console.log(error.config);
        });
    }
    render() {
        return (
            <div className='main'>
                <form method='post' onSubmit={this.handleSubmit}>
                    
                    <input ref={this.setInputUsername} type="text"/>
                    <input ref={this.setInputPassword} type="password"/>
                    <input type='submit'/>
                </form>
            </div>
        );
    }
}

export default Main;