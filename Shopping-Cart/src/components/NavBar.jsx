import {
  Container,
  Nav,
  Navbar as NavbarBs,
  Form,
  Button
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ cartItemCount }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  let handleForm = (e) => {
    e.preventDefault()
    if(!query.trim()){
      return
    }
    navigate(`/shop?search=${query}`);

  };

  return (
      <NavbarBs sticky="top" className="navbar-custom">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              to="/"
              as={NavLink}
              className="navbar-logo text-uppercase fw-bold"
            >
              Léviora
            </Nav.Link>
          </Nav>

          <Nav className="mx-auto navbar-links">
            <Nav.Link to="/" as={NavLink} className="navbar-item">
              Home
            </Nav.Link>
            <Nav.Link to="/About" as={NavLink} className="navbar-item">
              About
            </Nav.Link>
            <Nav.Link to="/Shop" as={NavLink} className="navbar-item">
              Shop
            </Nav.Link>
          </Nav>

          <Form className="d-flex search-form" onSubmit={handleForm}>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-dark" type="submit" className="search-btn">
              <FaSearch />
            </Button>
          </Form>

          <Nav className="ms-3">
            <Nav.Link to="/cart" as={NavLink} className="cart-btn">
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className="cart-counter">{cartItemCount}</span>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
  );
}

export default NavBar;


