import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Style/Menu.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";

function Menu() {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const LogoutHandler = () => {
        firebase.auth().signOut();
        navigate("/");
    };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="white"
            variant="white"
            fixed={"top"}
            className={"position-sticky ps-0"}
        >
            <Container id="menu">
                <Navbar.Brand href="/" className="brand">
                    Yeji's Vlog
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto space">
                        <Nav.Link href="/" className="text">
                            홈
                        </Nav.Link>
                        <Nav.Link href="/Lab" className="text">
                            학부연구실
                        </Nav.Link>
                        <Nav.Link href="/Board" className="text">
                            게시판
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {user.accessToken ? (
                        <>
                            <Navbar.Text
                                style={{
                                    color: "white",
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                                onClick={() => LogoutHandler()}
                            >
                                Logout
                            </Navbar.Text>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            style={{
                                color: "black",
                                textDecoration: "none",
                            }}
                        >
                            login
                        </Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
