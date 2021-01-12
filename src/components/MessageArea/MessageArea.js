import React, {Component} from "react";
import {Form} from "react-bootstrap";

import "./MessageArea.css";

class MessageArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "messages": []
        };
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Messages</Form.Label>
                        <Form.Control disabled id="messageArea" as="textarea" rows={10} />
                    </Form.Group>
                </Form>
                {
                    this.state["messages"].forEach(a => <div>{a}</div>)
                }
            </div>
        );
    }

}

export default MessageArea;