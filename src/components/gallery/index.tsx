import React, { useEffect, useState } from "react";
import styles from "./main.module.sass";
import { parceDate } from "../../scripts/parceDate";
import { Card, ArrayPlaceholer } from "../card";
import { fetchApi } from "../../scripts/fetchApi";

const IMAGES_TO_LOAD = 6;

export interface IGallery {
  setDate: (date: string) => void;
  setIsGalleryOpen: (isOpen: boolean) => void;
}

export const Gallery: React.FunctionComponent<IGallery> = (props) => {
  const [cards, setCards] = useState([] as JSX.Element[]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  useEffect(() => {
    const array = [];
    for (let i = imagesLoaded; i < imagesLoaded + IMAGES_TO_LOAD; i++) {
      array.push(
        fetchApi(parceDate(new Date(Date.now() - 3600 * 24 * 1000 * i)))
      );
    }
    Promise.all(array).then((result) =>
      setCards([
        ...cards,
        ...result.map((el) => (
          <Card
            date={el.data?.date}
            title={el.data?.title}
            url={el.data?.url}
            error={el.error}
            setDate={props.setDate}
            setIsGalleryOpen={props.setIsGalleryOpen}
          />
        )),
      ])
    );
  }, [imagesLoaded]);
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogContent}>
        {cards[0] ? cards : ArrayPlaceholer}
        <button
          className={styles.loadMoreBtn}
          onClick={() => setImagesLoaded(imagesLoaded + IMAGES_TO_LOAD)}
        >
          Загрузить ещё
        </button>
      </div>
    </div>
  );
};
