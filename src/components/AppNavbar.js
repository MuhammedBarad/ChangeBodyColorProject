import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";
const AppNavbar = ({ changeNavbarColor }) => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="navcolor"
        style={{ background: changeNavbarColor }}
      >
        <Container>
          <Navbar.Brand style={{ color: "white" }} href="#">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "white" }} href="#">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
