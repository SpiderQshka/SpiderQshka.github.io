import React from "react";
import styles from "./main.module.sass";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className={styles.pageLoaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};
