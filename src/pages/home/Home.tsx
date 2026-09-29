import { useLocation } from "wouter";
import Button from "../../components/button/Button";
import { perfil } from "../../data/portafolio";
import sectionStyles from "../../components/section/Section.module.css";
import styles from "./Home.module.css";

const Home = () => {
  const [, navigate] = useLocation();

  return (
    <section className={`${sectionStyles.section} ${styles.hero}`}>
      <p className={styles.saludo}>Hola, soy</p>
      <h1 className={styles.nombre}>{perfil.nombre}</h1>
      <p className={styles.rol}>{perfil.rol}</p>
      <p className={styles.bio}>{perfil.bio}</p>
      <div className={styles.acciones}>
        <Button variant="contained" onClick={() => navigate("/proyectos")}>
          Ver proyectos
        </Button>
        <Button variant="outlined" onClick={() => navigate("/contacto")}>
          Contactarme
        </Button>
      </div>
    </section>
  );
};

export default Home;
