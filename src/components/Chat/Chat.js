import React, {Component} from "react";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import MessageArea from "../MessageArea/MessageArea";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import axios from "axios";
import socketIOClient from "socket.io-client";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {"friendsList":[]};
        const ENDPOINT = "http://127.0.0.1:8081";
        this.ENDPOINT = ENDPOINT;
    }

    getData = async () => {
        let friendsList = await axios.get("http://localhost:8081/users/nik@test.com/friends");
        friendsList = friendsList["data"];
        this.setState({
            "friendsList": friendsList
        });
    }

    componentWillMount() {
        this.getData();

        const socket = socketIOClient(this.ENDPOINT,{transport:['websocket']});
        // var socket = io('https://yourDomain:3000', { transport : ['websocket'] });

    }

    componentDidMount = ()=> {

    }

    render() {
        return (
            <div>
                <CustomNavbar/>
                <MessageArea/>
                <SendMessageForm friendsList={this.state.friendsList}/>
            </div>
        );
    }

}
export default Chat;