import { Container, Row, Col } from "react-bootstrap";
import styles from "./Products.module.css";
import { FaRobot, FaDesktop, FaChartLine } from "react-icons/fa";

const productsData = [
  {
    icon: <FaRobot size={50} />,
    title: "Dicere - IA de Atendimento",
    description: "(Descrição a definir)",
  },
  {
    icon: <FaDesktop size={50} />,
    title: "Landing Pages de Conversão",
    description: "(Descrição a definir)",
  },
  {
    icon: <FaChartLine size={50} />,
    title: "Dashboards de BI",
    description: "(Descrição a definir)",
  },
];

const Products = () => {
  return (
    <section id="produtos" className={styles.productsSection}>
      <Container>
        <h2 className={styles.mainTitle}>Produtos</h2>
        <Row className="justify-content-center g-4">
          {productsData.map((product, index) => (
            <Col key={index} lg={4} md={6}>
              <div className={styles.card}>
                <div className={styles.image}>{product.icon}</div>
                <div className={styles.content}>
                  <a href="#" className={styles.titleLink}>
                    <span className={styles.title}>{product.title}</span>
                  </a>
                  <p className={styles.desc}>{product.description}</p>
                  <a className={styles.action} href="#">
                    Saiba mais
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <br />
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          repellat, natus reiciendis odit quae unde, cupiditate ratione modi ut
          maxime illum rem. Praesentium aliquam, nostrum nemo cupiditate
          consequuntur modi! Hic. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis, eius dolorem. Dolorem earum enim rem
          praesentium, assumenda consequuntur obcaecati error accusamus facilis
          dolore recusandae? Tenetur consectetur minima quasi at voluptatum!
        </p>
      </Container>
    </section>
  );
};

export default Products;
