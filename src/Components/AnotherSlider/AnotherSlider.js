import React, { useState } from "react";
import styles from "./another.module.css";
const AnotherSlider = ({ totalSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const handleSlideClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  const dots = [];
  for (let i = 1; i <= totalSlides; i++) {
    dots.push(
      <button
        key={i}
        onClick={() => handleSlideClick(i)}
        className={currentSlide === i ? styles.active : ""}
      />
    );
  }
  return (
    <div className={styles.paginationSlider}>{dots}</div>
  );
};

export default AnotherSlider;
