import styles from "./Button.module.css";

interface ButtonProps {
  variant: "text" | "contained" | "outlined";
  children: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
}

const Button = ({ variant, children, type = "button", href, onClick }: ButtonProps) => {
  if (href) {
    return (
      <a
        data-variant={variant}
        className={styles.button}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button data-variant={variant} className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
