import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Bcyrpt from "bcryptjs";
import Login from "../Login/Login";

/*handleSubmit = (event) => {
    console.log(event)
    let config = {
        headers: {
            "content-type": "application/json",
        }
    };
    let data = {
        "email": this.state.email,
        "password": this.state.password
    };
    axios.post("http://localhost:8081/signup/",data,config).then(
        element => element["data"]["isUserCreated"]===true?
            this.setState({
                LoginStatus: true,
                email: event.target[0].defaultValue
            })
            :alert(element["data"]["msg"])
    );

    event.preventDefault();
};*/

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isValidUser: false
        };
    }


    handler = async (event) => {
        let config = {
            headers: {
                "content-type": "application/json",
            }
        };

        let data = {
            "email": this.state.email,
            "password": this.state.password
        };

        axios.post("http://localhost:8081/signup/",data,config).then(
            element => element["data"]["status"] === "Success"? this.setState({
                email: this.state.email,
                password: this.state.password,
                isValidUser: true
            }):alert(element["data"]["status"])
        );
        event.preventDefault();
    };

    render() {
        if (this.state.isValidUser === true) {
            return (
                <Redirect to='/' />
            )
        } else {
            return (
                <div id="signupTab" style={{"visibility":"hidden"}} className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email"
                                       className="form-control"
                                       value={this.state.email}
                                       onChange={(e) => this.setState({email: e.target.value})}
                                       placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                       value={this.state.password}
                                       onChange={(e) => this.setState({password: e.target.value})}
                                       className="form-control"
                                       placeholder="Enter password" />
                            </div>

                            <button type="submit"
                                    onClick={this.handler}
                                    className="btn btn-primary btn-block">Sign Up</button>

                            <p className="forgot-password text-right">
                                Already registered <a href="#">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            );
        }
    }
}