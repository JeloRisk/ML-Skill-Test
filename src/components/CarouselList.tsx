/** @format */

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Exercise.css";
import { IonBackButton, IonButtons } from "@ionic/react";

// sample data
const slides = [
  { id: 1, text: "Enjoy Battle!", color: "#FFA756" },
  { id: 2, text: "Discover Amazing Pokémon!", color: "#58abf6" },
  { id: 3, text: "Start Your Adventure!", color: "#8bd674" },
];

const CarouselList: React.FC = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [activeColor, setActiveColor] = useState<string>(slides[0].color);

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex % slides.length;
    setActiveColor(slides[activeIndex].color);
  };

  return (
    <div className='welcome-carousel'>
      <Swiper
        className='h-full'
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `
              <span class="${className}"></span>`;
          },
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}>
        {/* Floating Back Button */}
        <IonButtons
          slot='start'
          style={{ position: "absolute", top: "10px", left: "10px", zIndex: 10 }}>
          <IonBackButton defaultHref='/' />
        </IonButtons>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className='slide-content'
              style={{
                backgroundColor: slide.color,
                padding: "40px 20px",
                color: "#fff",
              }}>
              <h1 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{slide.text}</h1>
            </div>
          </SwiperSlide>
        ))}

        <IonButtons
          className='welcome-carousel__button'
          style={{ backgroundColor: "#F49EB1" }}>
          Let’s Go!
        </IonButtons>
      </Swiper>
    </div>
  );
};

export default CarouselList;
