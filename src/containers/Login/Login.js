import React, { Component } from 'react';
import axios from 'axios'
import { ifError } from 'assert';

class Login extends Component {
    state = {
        userName: '',
        password: ''
    }        

    onUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    onPasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    logInHandler = () => {

        axios.get(`https://tic-tac-toe-e1a61.firebaseio.com/Users/${this.state.userName}.json`)
        .then( response => {
            let password = response.data.password
            if(this.state.password == password) {
                console.log("Valid user")
            } else {
                console.log("Invalid user");
                
            }
        } );
    }

    render () {

        return (
            <div className="Login">
                <p>LOGIN</p>
                <input type="text" placeholder="Username" value={this.state.userName} onChange={this.onUserNameHandler} />
                <input type="password" placeholder="Password" onChange={this.onPasswordHandler} />
                <input type="button" onClick={this.logInHandler} value="Submit" />
            </div>
        );
    }
} 

export default Login;