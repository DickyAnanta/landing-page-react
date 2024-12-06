import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { navLink } from "../data/index";

import "../dist/css/navbar.css";

function NavbarComponent() {
    return (
        <div>
            <header>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/" className="logo">
                            <img src="/src/assets/Img/logo.png" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                {navLink.map((data) => {
                                    return (
                                        <div className="nav-link" key={data.id}>
                                            <NavLink to={data.path}>
                                                {data.text}
                                            </NavLink>
                                        </div>
                                    );
                                })}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default NavbarComponent;
