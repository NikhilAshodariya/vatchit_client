import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomNavbar.css"


class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    render() {
        return (
            <Navbar>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
export default CustomNavbar;