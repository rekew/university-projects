import { useState, useEffect } from "react";
import right from "../assets/arrow-right.svg";
import left from "../assets/arrow-left.svg";
import "../styles/NewsSlider.css";
import Button from "./Button";
import HeroImage from "../assets/HeroImage.png";
import HeroImage2 from "../assets/HeroImage2.jpeg";
import HeroImage3 from "../assets/HeroImage3.jpeg";

type NewsItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const newsData: NewsItem[] = [
  {
    title: `Арал теңізінде су көлемі ұлғайды`,
    description: `Солтүстік Аралды сақтау жобасының алғашқы кезеңінің нәтижесінде теңіздегі су көлемі 42 <br />
        пайызға ұлғайды, – деп хабарлайды <a href="https://kaz.tengrinews.kz/kazakhstan_news/aral-tenznde-su-kolem-ulgaydyi-364674/">Tengrinews.kz</a> тілшісі министрліктің баспасөз қызметіне <br />
        сілтеме жасап.`,
    image: HeroImage,
    link: "https://kaz.tengrinews.kz/kazakhstan_news/aral-tenznde-su-kolem-ulgaydyi-364674/",
  },
  {
    title: ` Қызыл түске боялған Каспий Ақтау тұрғындарын шошытты`,
    description: `Ақтауда 1-шағынаудандағы Каспий теңізінің жағалауы қызыл түске боялған. Жергілікті тұрғындар
     дабыл қағып отыр, алайда экологтар ақтаулықтарды
      сабырға шақырды, - деп хабарлайды <a href = "https://kaz.tengrinews.kz/kazakhstan_news/kyizyil-tuske-boyalgan-kaspiy-aktau-turgyindaryin-365292/">Tengrinews.kz</a> тілшісі.`,
    image: HeroImage2,
    link: "https://kaz.tengrinews.kz/kazakhstan_news/kyizyil-tuske-boyalgan-kaspiy-aktau-turgyindaryin-365292/",
  },
  {
    title: `Атырауда ауа сапасы он есеге дейін нашарлап кеткен`,
    description: `Кейінгі күндері Атырауда ауа сапасы күрт нашарлап, лас заттардың шекті мөлшері 
    бірнеше есеге артқан, - деп хабарлайды <a href = "https://kaz.tengrinews.kz/kazakhstan_news/atyirauda-aua-sapasyi-on-esege-deyn-nasharlap-ketken-365875/">Tengrinews.kz</a>
    тілшісі "Ақ Жайыққа" сілтеме жасап.`,
    image: HeroImage3,
    link: "https://kaz.tengrinews.kz/kazakhstan_news/atyirauda-aua-sapasyi-on-esege-deyn-nasharlap-ketken-365875/",
  },
];

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlide = (direction: "prev" | "next") => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % newsData.length
        : (currentIndex - 1 + newsData.length) % newsData.length;

    setCurrentIndex(newIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleClick = (link: string) => {
    window.location.href = link;
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlide("next");
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="main-section">
      <div className="slider-wrapper">
        <div
          className="slider-container"
          style={{
            transform: `translateX(-${currentIndex * 33.333}%)`,
            transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {newsData.map((item, index) => (
            <div key={index} className="single-slide">
              <div className="slide-content">
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
                    onClick={() => handleSlide("prev")}
                  />
                  <img src={item.image} alt="News" className="news-image" />
                  <img
                    src={right}
                    alt="Next"
                    className="arrow"
                    onClick={() => handleSlide("next")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;
