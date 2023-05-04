import React, { useEffect, useState } from "react";
import styles from "./slider.module.css";

import jane from "../../../public/assets/jane.png";
import coaper from "../../../public/assets/coaper.png";
import picture from "../../../public/assets/Picture.png";
const Slider = () => {
  const items = [
    {
      id: 1,
      title: "Efficient Collaborating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: jane,
      name: "jane",
    },
    {
      id: 2,
      title: "Intuitive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: coaper,
      name: "coaper",
    },
    {
      id: 3,
      title: "Mindblowing Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: picture,
      name: "jane Coaper",
    },
    {
      id: 4,
      title: "Item 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: jane,
      name: "jane Coaper",
    },
    {
      id: 5,
      title: "Item 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: coaper,
      name: "jane Coaper",
    },
    {
      id: 6,
      title: "Item 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: picture,
      name: "jane Coaper",
    },
    {
      id: 7,
      title: "Item 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: coaper,
      name: "jane Coaper",
    },
    {
      id: 8,
      title: "Item 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: picture,
      name: "jane Coaper",
    },
    {
      id: 9,
      title: "Item 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      image: jane,
      name: "jane Coaper",
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  //autoplay start
  useEffect(() => {
    const lastIndex = items.length / itemsPerPage - 1;
    if (currentPage < 0) {
      setCurrentPage(lastIndex);
    }
    if (currentPage > lastIndex) {
      setCurrentPage(0);
    }
  }, [currentPage, items]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentPage(currentPage + 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [currentPage]);
  //   autoplay end
  const handlePaginationClick = (index) => {
    setCurrentPage(index);
  };
  //dots
  const totalSlides = 2;
  const dots = [];
  for (let i = 0; i <= totalSlides; i++) {
    dots.push(
      <button
        key={i}
        onClick={() => handlePaginationClick(i)}
        className={currentPage === i ? styles.active : ""}
      />
    );
  }

  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const nextItem = () => {
    console.log(currentPage);
    console.log(items.length / itemsPerPage);
    if (currentPage === items.length / itemsPerPage - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevItem = () => {
    console.log(currentPage);
    console.log(itemsPerPage);
    if (currentPage > 0) {
      // console.log('+++++++++++')
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer}>
        {currentItems.map((item) => (
          <div key={item.id}>
            <div className={styles.slide}>
              <h5 className={styles.title}>{item.title}</h5>
              <p className={styles.description}>{item.description}</p>
            </div>
            <img src={item.image} href="" alt="" />
            <h5 className={styles.name}>{item.name}</h5>
          </div>
        ))}
      </div>

      {/* <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <div
            key={i}
            className={`${styles.pageItem} ${
              i === currentPage ? styles.active : ""
            }`}
            onClick={() => handlePaginationClick(i)}
          >
            {i + 1}
          </div>
        ))}
      </div> */}
      <div className={styles.paginationSlider}>{dots}</div>
      <div>
        <button onClick={prevItem}>prev</button>
        <button onClick={nextItem}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
