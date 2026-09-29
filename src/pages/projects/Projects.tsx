import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Section from "../../components/section/Section";
import { proyectos } from "../../data/portafolio";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Section title="Proyectos" subtitle="Algunos trabajos en los que he participado." grid>
      {proyectos.map((proyecto) => (
        <Card
          key={proyecto.titulo}
          title={proyecto.titulo}
          footer={
            (proyecto.repo || proyecto.demo) && (
              <>
                {proyecto.demo && (
                  <Button variant="contained" href={proyecto.demo}>
                    Ver demo
                  </Button>
                )}
                {proyecto.repo && (
                  <Button variant="outlined" href={proyecto.repo}>
                    Código
                  </Button>
                )}
              </>
            )
          }
        >
          <p className={styles.descripcion}>{proyecto.descripcion}</p>
          <div className={styles.tags}>
            {proyecto.tecnologias.map((tecnologia) => (
              <span key={tecnologia} className={styles.tag}>
                {tecnologia}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </Section>
  );
};

export default Projects;
