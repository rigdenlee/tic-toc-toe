import React, { Component } from 'react';
import axios from 'axios'

class SignUp extends Component {

    state = {
        userName: '',
        password: ''
    }        

    userNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    signUpHandler = () => {
        let data = `{
            "${this.state.userName}": {
                "user": "${this.state.userName}",
                "password": "${this.state.password}"
            }
        }`

        axios.patch(`https://tic-tac-toe-e1a61.firebaseio.com/Users.json`, JSON.parse(data))
        .then( response => {
            console.log( response );
        } );
    }

    render () {

        return (
            <div className="Login">
                <p>SIGN UP</p>
                <input type="text" placeholder="Username" value={this.state.userName} onChange={this.userNameHandler} />
                <input type="password" placeholder="Password" onChange={this.passwordHandler} />
                <input type="button" onClick={this.signUpHandler} value="Submit" />
            </div>
        );
    }
} 

export default SignUp;