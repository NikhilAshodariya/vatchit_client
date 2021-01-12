import {Form} from "react-bootstrap";
import React, {Component} from "react";
import Button from "react-bootstrap/Button";


import "./SendMessageForm.css";

class SendMessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "friendsList": ["Aakash", "Kumar", "Neil", "Hardik"]
        };
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group id="recipientList" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
                            {
                                this.state["friendsList"].map(val=> <option value={val}>{val}</option>)
                            }
                            {/*<option>1</option>*/}
                            {/*<option>2</option>*/}
                            {/*<option>3</option>*/}
                            {/*<option>4</option>*/}
                            {/*<option>5</option>*/}
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