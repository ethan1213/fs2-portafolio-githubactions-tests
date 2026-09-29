import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  title: string;
  subtitle?: string;
  grid?: boolean;
  children?: React.ReactNode;
}

const Section = ({ title, subtitle, grid = false, children }: SectionProps) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children && <div className={grid ? styles.grid : undefined}>{children}</div>}
    </section>
  );
};

export default Section;
