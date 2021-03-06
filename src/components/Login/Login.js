import React, {Component} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Redirect} from "react-router";
import Bcyrpt from "bcryptjs";
import Chat from "../Chat/Chat";

export default class Login extends Component {
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

        axios.post("http://localhost:8081/login/",data,config).then(
            element => {
                element["data"]["status"] === "Success"? this.setState({
                email: this.state.email,
                password: this.state.password,
                isValidUser: true
            }):alert(element["data"]["status"]);

                localStorage.setItem("isValidUser","true");
            }
        );
        event.preventDefault();
    };

    render() {
        if (localStorage.getItem("isValidUser") === "true") {
            return (
                <div>
                    redirect to /chat url
                </div>
            )
        }else {
            return (
                <div id="loginTab" style={{"visibility":"visible"}} className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Sign In</h3>

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

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" onClick={this.handler} className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            );
        }
    }
}