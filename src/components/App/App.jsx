import { useState, useEffect } from 'react';
import { fetchPhotos } from '../../photos-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';


import css from './App.module.css';


export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchPhotos({query, page});
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  
    getPhotos();
  }, [page, query]);

  useEffect(() => {
    // Після оновлення списку зображень прокрутити сторінку вниз
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, [photos]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      {error && <ErrorMessage />}
      {photos.length > 0 && (<ImageGallery items={photos} onImageClick={openModal} />)}
      {isLoading && <Loader />}
      {photos.length > 9 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {/* {selectedImage && (<ImageModal imageUrl={selectedImage} closeModal={closeModal} />)} */}
    </div>
  );
}