import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Services.module.css";
import { FaCode, FaBullseye, FaChartBar } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaCode size={50} />,
    title: "Desenvolvimento Web",
    description:
      "Construímos a presença digital que seu negócio precisa para crescer e alcançar novos mercados.",
  },
  {
    icon: <FaBullseye size={50} />,
    title: "Landing Pages Empresariais",
    description:
      "Transformamos cliques em clientes com páginas focadas em uma única missão: a conversão.",
  },
  {
    icon: <FaChartBar size={50} />,
    title: "Dashboards em BI",
    description:
      "Convertemos dados complexos em insights visuais e acionáveis para uma tomada de decisão mais inteligente.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className={styles.servicesSection}>
      <Container>
        <h2>Nossos Serviços</h2>
        <p className={styles.sectionDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          delectus amet quibusdam. Quis expedita nihil nesciunt fugiat itaque
          quas doloremque dignissimos voluptas, cumque provident fugit
          voluptatibus voluptatum facere aspernatur omnis. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Reiciendis voluptates,
          temporibus alias esse, ipsum velit sit ea distinctio mollitia quis quo
          aut magnam porro itaque ducimus voluptate asperiores labore! Eos. lo
        </p>

        <Row className="justify-content-center g-4">
          {servicesData.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className={styles.serviceCard}>
                <Card.Body>
                  <div className={styles.cardIcon}>{service.icon}</div>
                  <Card.Title as="h3" className={styles.cardTitle}>
                    {service.title}
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
