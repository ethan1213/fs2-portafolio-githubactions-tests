import { Link } from "wouter";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">inicio</Link>
        </li>
        <li className={styles.item}>
          <Link href="/proyectos">proyectos</Link>
        </li>
        <li className={styles.item}>
          <Link href="/sobre-mi">sobre mí</Link>
        </li>
        <li className={styles.item}>
          <Link href="/contacto">contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
