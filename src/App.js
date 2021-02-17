import './App.css';
import React from "react";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Message from "./components/Message/Message";
import MessageArea from "./components/MessageArea/MessageArea.js";
import SendMessageForm from "./components/SendMessageForm/SendMessageForm.js";
import Login from "./components/Login/Login.js";
import Chat from "./components/Chat/Chat";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route path="/chat">
                            <Chat/>
                        </Route>
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
