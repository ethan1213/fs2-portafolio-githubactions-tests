import { useId } from "react";
import type { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  multiline?: boolean;
}

const Input = ({ label, value, onChange, type = "text", multiline = false }: InputProps) => {
  const id = useId();
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange(event.target.value);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          className={`${styles.input} ${styles.textarea}`}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input id={id} className={styles.input} type={type} value={value} onChange={handleChange} />
      )}
    </div>
  );
};

export default Input;
