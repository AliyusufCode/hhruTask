import React from "react";
import styles from "./Button.module.scss";
const Button = ({ Icon, topTitle, bottomTitle }) => {
  return (
    <div className={styles.content}>
      <Icon className={styles.icon} />
      <div className={styles.text}>
        <span className={styles.top}>{topTitle}</span>
        <span className={styles.bottom}>{bottomTitle}</span>
      </div>
    </div>
  );
};

export default Button;
