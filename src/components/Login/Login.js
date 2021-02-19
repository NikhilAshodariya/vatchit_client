import React, {Component} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        // const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("");
        this.state = {
            email: "",
            password: "",
            isValidUser: false
        };
    }

    handleSubmit = async (event) => {
        console.log(event)
        let config = {
            headers: {
                "content-type": "application/json",
            }
        };
        let data = {
            "email": event.target[0].defaultValue,
            "password": event.target[1].defaultValue
        };
        let isValidUser = await axios.post("http://localhost:8081/login/",data,config);
        alert(JSON.stringify(isValidUser));

        if(isValidUser["data"] == "true") {
            this.setState({
                email: event.target[0].defaultValue,
                password: event.target[1].defaultValue,
                isValidUser: true
            });
        }

        console.log(JSON.stringify(isValidUser));

        event.preventDefault();
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login;