import styles from "./Text.module.scss";
const Text = () => {
  return (
    <div className={styles.contentTitleLayout}>
      <div>
        <p className={styles.contentTitleContent}>
          Do you want to Learn more <br /> About cryptocurrencies <br />
          <span className={styles.span}>quickly and easily ?</span>
        </p>
        <div>
          <p className={styles.contentTitleContentBottom}>
            Subscribe to our channel to learn more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;

import React from "react";
