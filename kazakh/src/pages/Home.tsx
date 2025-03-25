import Navbar from "../components/Navbar";
import NewsSlider from "../components/NewsSlider";
import ProductCard from "../components/ProductCard";
import GameBoard from "../components/Game";
import Footer from "../components/Footer";
import Product1 from "../assets/Product1.svg";
import Product2 from "../assets/Product2.svg";
import Product3 from "../assets/Product3.svg";
import HeroImage from "../assets/HeroImage.png";
import HeroImage2 from "../assets/HeroImage2.jpeg";
import HeroImage3 from "../assets/HeroImage3.jpeg";
import "../styles/Home.css";

function Home() {
  const newsData = [
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

  function handleClick(link: string) {
    window.location.href = link;
  }

  return (
    <>
      <Navbar />
      <div className="landing">
        <NewsSlider newsItems={newsData} />

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

        <Footer />
      </div>
    </>
  );
}

export default Home;
