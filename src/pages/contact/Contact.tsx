import { useState } from "react";
import type { FormEvent } from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Section from "../../components/section/Section";
import { perfil } from "../../data/portafolio";
import styles from "./Contact.module.css";

const Contact = () => {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");
  const [enviado, setEnviado] = useState<boolean>(false);

  // GitHub Pages no tiene backend: se abre el cliente de correo con el mensaje armado.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const asunto = encodeURIComponent(`Contacto desde portafolio: ${nombre}`);
    const cuerpo = encodeURIComponent(`${mensaje}\n\n${nombre} <${email}>`);
    window.location.href = `mailto:${perfil.email}?subject=${asunto}&body=${cuerpo}`;
    setEnviado(true);
  };

  return (
    <Section title="Contacto" subtitle="¿Tienes una propuesta o pregunta? Escríbeme." grid>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Card
          footer={
            <>
              <Button variant="contained" type="submit">
                Enviar
              </Button>
              <Button variant="text" href={perfil.github}>
                GitHub
              </Button>
              {perfil.linkedin && (
                <Button variant="text" href={perfil.linkedin}>
                  LinkedIn
                </Button>
              )}
            </>
          }
        >
          <div className={styles.campos}>
            <Input label="Nombre" value={nombre} onChange={setNombre} />
            <Input label="Email" type="email" value={email} onChange={setEmail} />
            <Input label="Mensaje" value={mensaje} onChange={setMensaje} multiline />
            {enviado && (
              <p className={styles.mensaje}>Se abrió tu cliente de correo para enviar el mensaje.</p>
            )}
          </div>
        </Card>
      </form>
    </Section>
  );
};

export default Contact;
