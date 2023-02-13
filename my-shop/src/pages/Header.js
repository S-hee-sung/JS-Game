import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (  
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#" onClick={() => { navigate('/'); }}>
              My Shop
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >좋아요</Nav.Link>
              <Nav.Link >My</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;