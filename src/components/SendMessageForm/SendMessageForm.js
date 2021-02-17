import {Form} from "react-bootstrap";
import React, {Component} from "react";
import Button from "react-bootstrap/Button";


import "./SendMessageForm.css";

class SendMessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "friendsList": props.friendsList
        };
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group id="recipientList" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" id="FriendsList">
                            {
                                this.props.friendsList!==[]?
                                this.props.friendsList.map(val=> <option value={val["email"]}>{val["email"]}</option>):<div></div>
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Messages</Form.Label>
                        <Form.Control placeholder="Type your message here" id="messageTextBox" as="textarea" rows={10} />
                    </Form.Group>
                    <Button id="sendMessageButton" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default SendMessageForm;