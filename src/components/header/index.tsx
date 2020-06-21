import React from "react";
import logoImg from "../../static/icons/logo.png";
import logoActiveImg from "../../static/icons/logo-active.png";
import galleryImg from "../../static/icons/gallery.png";
import galleryActiveImg from "../../static/icons/gallery-active.png";
import styles from "./main.module.sass";

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
            value={props.date}
            onChange={(e) => {
              props.setIsGalleryOpen(false);
              e.target.value && props.setDate(e.target.value);
            }}
          />
        </div>
        <div className={styles.toGalleryBtnContainer}>
          <button
            className={styles.toGalleryBtn}
            onClick={() => props.setIsGalleryOpen(!props.isGalleryOpen)}
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
