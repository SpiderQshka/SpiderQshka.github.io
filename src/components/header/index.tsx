import React from "react";
import logoImg from "../../static/icons/logo.png";
import logoActiveImg from "../../static/icons/logo-active.png";
import galleryImg from "../../static/icons/gallery.png";
import galleryActiveImg from "../../static/icons/gallery-active.png";
import styles from "./main.module.sass";
import { parceDate } from "../../scripts/parceDate";
export interface IHeader {
  setDate: (date: string) => void;
  date: string;
  isGalleryOpen: boolean;
  setIsGalleryOpen: (isOpen: boolean) => void;
}

export const Header: React.FunctionComponent<IHeader> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <button
            title="На главную"
            className={styles.logoBtn}
            onClick={() => props.setIsGalleryOpen(false)}
          >
            <img
              src={props.isGalleryOpen ? logoImg : logoActiveImg}
              className={styles.logo}
              alt="APOD API"
            />
          </button>
        </div>
        <div className={styles.datePickerContainer}>
          <input
            className={styles.datePicker}
            type="date"
            title="Выберите дату"
            value={props.date}
            max={parceDate()}
            onChange={(e) => {
              props.setIsGalleryOpen(false);
              e.target.value && props.setDate(e.target.value);
            }}
          />
        </div>
        <div className={styles.toGalleryBtnContainer}>
          <button
            title="Галлерея"
            className={styles.toGalleryBtn}
            onClick={() => props.setIsGalleryOpen(true)}
          >
            <img
              src={props.isGalleryOpen ? galleryActiveImg : galleryImg}
              alt="Gallery"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
