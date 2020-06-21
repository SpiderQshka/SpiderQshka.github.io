import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { ImageAndDescription } from "./components/imageAndDescription";
import { fetchApi, IFetchApi } from "./scripts/fetchApi";
import { parceDate } from "./scripts/parceDate";
import { PageLoader } from "./components/loader";
import { Gallery } from "./components/gallery";

function App() {
  const localStorageDate = window.localStorage.getItem("date");
  const [date, setDate] = useState(
    localStorageDate ? (localStorageDate as string) : parceDate()
  );
  const [fetchResult, setFetchResult] = useState({} as IFetchApi);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("date", date);
    setIsLoaded(false);
    fetchApi(date).then((fetchedData) => {
      setFetchResult(fetchedData);
      setIsLoaded(true);
    });
  }, [date]);

  return (
    <>
      <Header
        setDate={setDate}
        date={date}
        setIsGalleryOpen={setIsGalleryOpen}
        isGalleryOpen={isGalleryOpen}
      />
      {isGalleryOpen ? (
        <Gallery setDate={setDate} setIsGalleryOpen={setIsGalleryOpen} />
      ) : isLoaded ? (
        <ImageAndDescription {...fetchResult} />
      ) : (
        <PageLoader />
      )}
    </>
  );
}

export default App;
