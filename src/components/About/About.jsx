// Importe o Container no topo do seu arquivo
import { Container } from "react-bootstrap";
import styles from "./About.module.css";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <section id="sobre-nos" className={styles.aboutSection}>
      <Container>
        <h2 className={styles.mainTitle}>SOBRE NÓS</h2>
        <p className={styles.aboutText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          aspernatur, earum quos quibusdam suscipit perspiciatis voluptate
          corporis. Ex officiis ipsum neque dignissimos dolorem? Inventore
          aspernatur mollitia, vero quod consequuntur optio. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Possimus eos temporibus similique
          explicabo magni, nostrum nihil omnis vitae odit placeat atque, corporis
          laudantium, labore nobis excepturi adipisci numquam qui! Odit.
        </p>
        <AboutCards />
      </Container>
    </section>
  );
};

export default About;