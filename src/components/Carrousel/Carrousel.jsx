import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './Carrousel.module.css';
import { loadImagesForUser } from '../../data/imageLoader';

const Carrousel = ({ userName }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const loadedImages = await loadImagesForUser(userName);
      setImages(loadedImages);
      setLoading(false);
    };

    fetchImages();
  }, [userName]);

  if (loading) {
    return <p className={styles.loading}>Cargando imágenes...</p>;
  }

  return (
    <div className={styles.carouselContainer}>
      {images.length === 0 ? (
        <p className={styles.noImages}>No hay imágenes para mostrar</p>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={2.5}
          className={styles.swiper}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img 
                src={img} 
                alt={`Foto ${idx + 1} de ${name}`} 
                className={styles.image} 
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carrousel;