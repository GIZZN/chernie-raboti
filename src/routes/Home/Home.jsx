import s from "./Home.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Nigger  from '../../assets/Nigger.png'; 
import StarIcon from '../../assets/StarIcon.png'; 

export function Home() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <h2 className={s.title}>Главная</h2>
        <div className={s.line}></div>
        <img className={s.image} src={Nigger } alt="Описание изображения" />
        <div className={s.aboutUs}>
          <h3 className={s.aboutUsTitle}>О нас</h3>
          <p className={s.aboutUsParagraph}>
            Мы магазин "Чёрные работы", предлагаем качественную строительную технику и материалы,
            которые порадуют вас надежностью и качеством. Наша цель - помочь вам найти подходящий
            и надежный инструмент или материал для вашей задачи.
          </p>
        </div>
        <Link to="/tovari" className={s.link}>
          Товары
        </Link>
        <div className={s.reviewsSection}>
          <h3 className={s.reviewsTitle}>Отзывы наших клиентов</h3>
          <div className={s.reviews}>
            <div className={s.reviewCard}>
              <div className={s.stars}>
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
              </div>
              <p className={s.reviewText}>
                Отличный магазин, всё пришло вовремя. Инструменты качественные и надёжные.
              </p>
            </div>
            <div className={s.reviewCard}>
              <div className={s.stars}>
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
              </div>
              <p className={s.reviewText}>
                Хороший выбор и адекватные цены. Единственное — хотелось бы быстрее доставку.
              </p>
            </div>
            <div className={s.reviewCard}>
              <div className={s.stars}>
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
                <img src={StarIcon} alt="Звезда" />
              </div>
              <p className={s.reviewText}>
                Магазин супер! Очень дружелюбный персонал и быстрое обслуживание.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
