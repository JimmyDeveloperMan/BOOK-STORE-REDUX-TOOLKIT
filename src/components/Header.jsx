import { Link, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

function Header({ children }) {
  const { cart } = useSelector((state) => state.cartSlice);

  return (
    <Navbar className="navbar" sticky="top" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Shopping Cart
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"m-2"}>
              Products
            </NavLink>
            <NavLink to="../../products/cart" className={"m-2"}>
              Cart-{cart.length}
            </NavLink>
          </Nav>
          {children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
