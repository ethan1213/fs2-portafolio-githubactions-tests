import Card from "../../components/card/Card";
import Section from "../../components/section/Section";
import { formacion, habilidades, perfil } from "../../data/portafolio";
import styles from "./About.module.css";

const About = () => {
  return (
    <Section title="Sobre mí" subtitle={perfil.bio} grid>
      {habilidades.map((grupo) => (
        <Card key={grupo.area} title={grupo.area}>
          <ul className={styles.lista}>
            {grupo.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      ))}
      <Card title="Formación">
        <ul className={styles.lista}>
          {formacion.map((f) => (
            <li key={f.titulo}>
              <strong>{f.titulo}</strong> — {f.lugar}
              <br />
              <span className={styles.periodo}>{f.periodo}</span>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
};

export default About;
