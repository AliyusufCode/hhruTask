import React from "react";
import { TiVendorApple } from "react-icons/ti";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Button from "../Button/Button";
import styles from "./AppButtons.module.scss";

const AppButtons = () => {
  return (
    <div className={styles.content}>
      <Button
        Icon={TiVendorApple}
        topTitle="get it on"
        bottomTitle="Google play"
      />
      <Button
        Icon={IoLogoGooglePlaystore}
        topTitle="Available on the"
        bottomTitle="App Store"
      />
    </div>
  );
};

export default AppButtons;
