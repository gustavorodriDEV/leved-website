import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const LevedNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  useEffect(() => {
    const handleScroll = () => {
      const transitionEndPoint = 400;
      const opacity = Math.min(window.scrollY / transitionEndPoint, 0.555);
      document.documentElement.style.setProperty("--nav-opacity", opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "home", text: "Home" },
    { to: "sobre-nos", text: "Sobre Nós" },
    { to: "produtos", text: "Produtos" },
    { to: "servicos", text: "Serviços" },
    { to: "contato", text: "Contato" },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        className={`${styles.navbarWrapper} ${
          showOffcanvas ? styles.navbarScrolled : ""
        }`}
        fixed="top"
        variant="dark"
      >
        <Container className="pe-1">
          <Navbar.Brand href="#home" className={styles.logo}>
            Leved Origin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-none d-lg-flex justify-content-end"
          >
            <Nav>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={styles.navLink}
                >
                  {link.text}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar.Offcanvas
        id="offcanvasNavbar"
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        className={styles.offcanvasMenu}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.offcanvasTitle}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3 flex-column">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className={styles.navLink}
                onClick={handleClose}
              >
                {link.text}
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};

export default LevedNavbar;
