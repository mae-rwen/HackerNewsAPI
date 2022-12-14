import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function OurNavbar() {
  
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <button className="border me-2 bg-dark text-white">Y</button>
          <Navbar.Brand href="#home" className="text-white">
            Hacker News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-white">
                new
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                past
              </Nav.Link>
              <Nav.Link href="#home" className="text-white">
                comments
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                ask
              </Nav.Link>
              <Nav.Link href="#home" className="text-white">
                show
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                jobs
              </Nav.Link>
              <Nav.Link href="#home" className="text-white">
                submit
              </Nav.Link>
            </Nav>
            <button className="text-dark border-0 bg-dark text-white">
              login
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
