import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import "./CustomNavbar.css;

export default class CustomNavbar extends Component {
    render() {
        return (
            <div id={"customNavBar"}>
                <div className={""}>
                    <>
                        <Nav className="justify-content-center bg-dark" activeKey="/home">
                            {/*ProfileWork experienceEducationCertifications and AwardsSkills*/}
                            <Nav.Item onClick={()=>this.props.changeActiveTab("profile")}>
                                <Nav.Link href={"#customNavBar"}><span className={"text-white"}>Profile</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={()=>this.props.changeActiveTab("workexp")}>
                                <Nav.Link eventKey="link-1" href={"#customNavBar"}>
                                    <span className="text-white">
                                        Work Experience
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={()=>this.props.changeActiveTab("education")}>
                                <Nav.Link eventKey="link-2" href={"#customNavBar"}>
                                    <span className="text-white">
                                        Education
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={()=>this.props.changeActiveTab("skills")}>
                                <Nav.Link eventKey="link-2" href={"#customNavBar"}><span className="text-white">Skills</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={()=>this.props.changeActiveTab("projects")}>
                                <Nav.Link eventKey="link-2" href={"#customNavBar"}><span className="text-white">Projects</span></Nav.Link>
                            </Nav.Item>
                            {/*<Nav.Item>*/}
                            {/*    <Nav.Link eventKey="disabled" disabled>*/}
                            {/*        Disabled*/}
                            {/*    </Nav.Link>*/}
                            {/*</Nav.Item>*/}
                        </Nav>
                        {/*<p className="text-center mt-4 mb-4">Or right-aligned</p>*/}
                        {/*<Nav className="justify-content-end" activeKey="/home">*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link href="/home">Active</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="link-1">Link</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="link-2">Link</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="disabled" disabled>*/}
                        {/*            Disabled*/}
                        {/*        </Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*</Nav>*/}
                    </>

                </div>

            </div>
        )
    }
}