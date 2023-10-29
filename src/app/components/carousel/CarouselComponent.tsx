import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'https://static.dw.com/image/66529608_1006.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKCp1wx4yXRH__A5pJuCm7PvLJXN1348yif8hX0HL2xnEGaLBrupjWR1-tn5iS3e79rM&usqp=CAU',
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const CarouselComponent = () => {
  return (
    <Carousel>      
    </Carousel>
  );
};

export default CarouselComponent;
