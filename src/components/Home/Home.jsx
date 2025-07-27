import styles from "./Home.module.css";
const Home = () => {
  return (
    <header id="home" className={styles.header}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>
          Eleve seu negócio com soluções inteligentes e rentáveis pensadas em
          atendimento e conversão de leads.
        </h1>
      </div>
    </header>
  );
};
export default Home;
