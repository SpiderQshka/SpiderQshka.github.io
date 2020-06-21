import React, { useState } from "react";
import { IFetchApi } from "../../scripts/fetchApi";
import styles from "./main.module.sass";

export const ImageAndDescription: React.FunctionComponent<IFetchApi> = (
  props
) => {
  const [isInfoShown, setIsInfoShown] = useState(false);
  return (
    <>
      <main
        className={styles.main}
        onClick={() => setIsInfoShown(!isInfoShown)}
      >
        {props.error ? (
          <div className={`${styles.content} ${styles.errorContent}`}>
            <h1 className={styles.error}>{props.error}</h1>
          </div>
        ) : (
          <div
            className={`${styles.content} ${styles.mainContent}`}
            style={{ backgroundImage: `url(${props.data?.url})` }}
          >
            <div className={`${styles.items} ${isInfoShown && styles.show}`}>
              <div className={styles.title}>{props.data?.title}</div>
              <div className={styles.description}>
                {props.data?.description}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
