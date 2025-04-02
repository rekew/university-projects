import Navbar from "../components/Navbar";
import NewsSlider from "../components/NewsSlider";
import ProductCard from "../components/ProductCard";
import GameBoard from "../components/Game";
import Footer from "../components/Footer";
import Product1 from "../assets/Product1.svg";
import Product2 from "../assets/Product2.svg";
import Product3 from "../assets/Product3.svg";
import "../styles/Home.css";

function Home() {
  function handleClick(link: string) {
    window.location.href = link;
  }

  return (
    <>
      <Navbar />
      <div className="landing">
        <NewsSlider />

        <div className="products">
          <ProductCard
            image={Product1}
            description={`Milan Бөтелкесі "1918". Көк. 354 мл.`}
            onClick={() =>
              handleClick(
                "https://www.marwin.kz/termosy/butylka-milan-1918-sinij-354-ml.html"
              )
            }
          />
          <ProductCard
            image={Product2}
            description={`Қайта пайдалануға болатын металл сусын түтіктері`}
            onClick={() =>
              handleClick(
                "https://ozon.kz/product/trubochka-dlya-kokteyley-i-napitkov-metallicheskaya-mnogorazovaya-zeero-ershik-dlya-trubochek-383620351/?at=GRt29z3wjikPKmA9c6xMRZXI1j8PoBCoKznkQIXXOXLQ&keywords=многоразовые+металлические+трубочки"
              )
            }
          />
          <ProductCard
            image={Product3}
            description={`Safta sunnu Side up шоппері`}
            onClick={() =>
              handleClick(
                "https://www.meloman.kz/shopery/shopper-safta-sunnu-side-up.html"
              )
            }
          />
        </div>

        <section className="info-section">
          <h2>Дұрыс сұрыптаңыз: планетаны сақтаңыз!</h2>
          <ul>
            <li>Әр затты тиісті қоқыс жәшігіне сүйреңіз.</li>
            <li>
              Барлық элементтерді таратқаннан кейін" нәтижені тексеру " түймесін
              басыңыз.
            </li>
            <li>
              Егер қиындықтар туындаса, шақыру үшін" шешімді көрсету " түймесін
              пайдаланыңыз
            </li>
          </ul>
        </section>

        <GameBoard />
      </div>
      <Footer />
    </>
  );
}

export default Home;
