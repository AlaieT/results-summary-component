import React from "react";

import type { ButtonProps } from "../../types";

import styles from "../../styles/components/button.module.scss";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, ...rest }, ref) => (
    <button {...rest} ref={ref} type={type} className={styles.button}>
      {children}
    </button>
  )
);

export default Button;
