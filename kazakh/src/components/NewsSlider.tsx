import { useState } from "react";
import right from "../assets/arrow-right.svg";
import left from "../assets/arrow-left.svg";
import "../styles/NewsSlider.css";
import Button from "./Button";

type NewsItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type NewsSliderProps = {
  newsItems: NewsItem[];
};

const NewsSlider = ({ newsItems }: NewsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  function handleClick(link: string) {
    window.location.href = link;
  }

  return (
    <section className="main-section">
      <div className="slider-wrapper">
        <div
          className="slider-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {newsItems.map((item, index) => (
            <div className="single-slide" key={index}>
              <div className="main-section-intro">
                <h1>{item.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                <Button
                  text="Ашу"
                  width="80px"
                  onClick={() => handleClick(item.link)}
                />
              </div>
              <div className="slider-controls">
                <img
                  src={left}
                  alt="Previous"
                  className="arrow"
                  onClick={prevSlide}
                />
                <img src={item.image} alt="News" className="news-image" />
                <img
                  src={right}
                  alt="Next"
                  className="arrow"
                  onClick={nextSlide}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;
