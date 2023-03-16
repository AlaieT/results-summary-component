import React from "react";

import styles from "../../styles/components/button.module.scss";

type ButtonProps = Omit<React.ComponentPropsWithoutRef<"button">, "className">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, ...rest }, ref) => {
    return (
      <button {...rest} ref={ref} type={type} className={styles.button}>
        {children}
      </button>
    );
  }
);

export type { ButtonProps };
export default Button;