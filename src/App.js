import './App.css';
import React from "react";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Message from "./components/Message/Message";
import MessageArea from "./components/MessageArea/MessageArea.js";
import SendMessageForm from "./components/SendMessageForm/SendMessageForm.js";
import Login from "./components/Login/Login.js";
import SignUp from "./components/SignUp/SignUp";
import Chat from "./components/Chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router, Link} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' >
                            <CustomNavbar/>
                            <Login/>
                            <SignUp/>
                        </Route>
                        {/*<Route path="/signin">*/}
                        {/*    <CustomNavbar pageChangerHandler={this.pageChangerHandler}/>*/}
                        {/*    <Login></Login>*/}
                        {/*</Route>*/}
                        {/*<Route path="/signup">*/}
                        {/*    <CustomNavbar pageChangerHandler={this.pageChangerHandler}/>*/}
                        {/*    <SignUp></SignUp>*/}
                        {/*</Route>*/}
                        <Route path="*">
                            <div>
                                This is a wrong URL dude
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
