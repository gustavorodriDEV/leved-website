import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
// import CallToAction from "./CallToAction";
import { Link } from "react-scroll";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const dataAtual = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      {/* <CallToAction /> */}
      <footer id="contato" className={styles.footer}>
        <div className={styles.widgetWrapper}>
          <Container>
            <Row>
              <Col lg={4} md={6}>
                <div className={styles.widget}>
                  <h4 className={styles.widgetTitle}>Leved Origin</h4>
                  <p>
                    Soluções inteligentes e rentáveis pensadas em atendimento e
                    conversão de leads para elevar o seu negócio.
                  </p>
                  <ul className={styles.social}>
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className={styles.widget}>
                  <h4 className={styles.widgetTitle}>Links</h4>
                  <ul>
                    <li>
                      <Link
                        to="home"
                        smooth={true}
                        duration={200}
                        offset={-70}
                        className={styles.navLink}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="sobre-nos"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className={styles.navLink}
                      >
                        Sobre Nós
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="servicos"
                        smooth={true}
                        duration={500}
                        offset={-60}
                        className={styles.navLink}
                      >
                        Serviços
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="produtos"
                        smooth={true}
                        duration={500}
                        offset={-60}
                        className={styles.navLink}
                      >
                        Produtos
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className={styles.widget}>
                  <h4 className={styles.widgetTitle}>Contato</h4>
                  <div className={styles.contactInfo}>
                    <p>
                      <FaEnvelope />
                      <a href="mailto:contato@levedorigin.com">
                        {" "}
                        contato@levedorigin.com
                      </a>
                    </p>
                    <p>
                      <FaPhoneAlt />
                      <a href="tel:+5561999999999"> (XX) XXXX-XXXX</a>
                    </p>
                    <p>
                      <FaMapMarkerAlt /> Planaltina, Goiás, Brasil
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.copyrightArea}>
          <Container>
            <Row>
              <Col>
                <p className="text-center">
                  {" Copyright © " +
                    dataAtual +
                    " Leved Origin. Todos os direitos reservados."}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
