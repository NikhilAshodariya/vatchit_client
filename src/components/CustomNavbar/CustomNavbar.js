import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    handler = (name) => {
        if (name === "login"){
            document.getElementById("loginTab").style.visibility = "visible";
            document.getElementById("signupTab").style.visibility = "hidden";
        } else if(name === "signup") {
            document.getElementById("loginTab").style.visibility = "hidden";
            document.getElementById("signupTab").style.visibility = "visible";
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to={"/signin"}>Chat Engine</Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={()=>this.handler("login")}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={()=>this.handler("signup")} className="nav-link">Sign
                                            up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </Router>
        );
    }

}

export default CustomNavbar;