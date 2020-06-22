import React from "react";
import styles from "./main.module.sass";
import errorImg from "../../static/icons/warning.png";

export interface ICard {
  url?: string;
  date?: string;
  title?: string;
  error?: string;
  setDate: (date: string) => void;
  setIsGalleryOpen: (isOpen: boolean) => void;
}

export const Card: React.FunctionComponent<ICard> = (props) => {
  return (
    <div
      className={`${styles.card} ${props.error && styles.cardError}`}
      style={{ backgroundImage: `url(${props.url ? props.url : errorImg})` }}
      onClick={() => {
        if (!props.error) {
          props.setIsGalleryOpen(false);
          props.setDate(props.date as string);
        }
      }}
    >
      <div className={styles.cardContent}>
        {props.error ? (
          <h3 className={styles.error}>{props.error}</h3>
        ) : (
          <>
            <h2 className={styles.title}>{props.title}</h2>
            <h3 className={styles.date}>{props.date}</h3>
          </>
        )}
      </div>
    </div>
  );
};

const CardPlaceholder = () => <div className={styles.card}></div>;

export const ArrayPlaceholer = [
  <CardPlaceholder />,
  <CardPlaceholder />,
  <CardPlaceholder />,
  <CardPlaceholder />,
  <CardPlaceholder />,
  <CardPlaceholder />,
];
