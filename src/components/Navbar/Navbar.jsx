// src/components/Navbar/Navbar.jsx

import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

const LevedNavbar = () => {
  return (
    <Navbar expand="lg" className={styles.navbarWrapper} fixed="top">
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>
          Leved Origin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#sobre-nos" className={styles.navLink}>
              Sobre nós
            </Nav.Link>
            <Nav.Link href="#produtos" className={styles.navLink}>
              Produtos
            </Nav.Link>
            <Nav.Link href="#servicos" className={styles.navLink}>
              Serviços
            </Nav.Link>
            <Nav.Link href="#contato" className={styles.navLink}>
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LevedNavbar;
