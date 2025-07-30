import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutCards.module.css";

const cards = [
  {
    titulo: "Titulo 1",
    texto:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. MolestiasLorem ipsum dolor sit amet consectetur, adipisicing elit. MolestiasLorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias",
  },
  {
    titulo: "Titulo 2",
    texto:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. MolestiasLorem ipsum dolor sit amet consectetur, adipisicing elit. MolestiasLorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias",
  },
  {
    titulo: "Titulo 3",
    texto:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias Lorem ipsum dolor sit amet consectetur, adipisicing elit. MolestiasLorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias",
  },
];

const AboutCards = () => {
  return (
    <section className={styles.solutionsSection}>
      <Container>
        <Row>
          {cards.map((card, index) => (
            <Col key={index} md={4} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.titulo}</h3>
              <p className={styles.cardText}>{card.texto}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutCards;
