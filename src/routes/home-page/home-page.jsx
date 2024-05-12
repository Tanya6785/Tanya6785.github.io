import { Link } from "react-router-dom";
import styles from "./home-page.module.css";
import {ROUTE_PRICE, ROUTE_RECORD} from "../../shared/constants/routes";
import homeImgFirst from "../../assets/home-img-1.png";
import homeImgSecond from "../../assets/home-img-2.png";
import homeImgThird from "../../assets/home-img-3.png";
import reviewIcon from "../../assets/review-icon.svg";
import { SwiperComponent } from "../../shared/component/swiper/swiper-component";
import {Title} from "../../shared/component/title/title.jsx";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeInner}>
        <div className={styles.homeLeft}>
          <div className={styles.homeTitle}>
            <Title title="Ногти красятся в сиянии у NailEnvy!" />
          </div>
          <Link className={styles.homeButton} to={ROUTE_RECORD}>
            Записаться
          </Link>
        </div>
        <div className={styles.homeRight}>
          <img
            className={(styles.homeImg, styles.homeImgFirst)}
            src={homeImgFirst}
            alt="Первая фотография маникюра"
          />
          <img
            className={styles.homeImg}
            src={homeImgSecond}
            alt="Вторая фотография маникюра"
          />
          <img
            className={styles.homeImg}
            src={homeImgThird}
            alt="Третья фотография маникюра"
          />
        </div>
      </div>
      <Title title="Отзывы" className={styles.homeReview}/>
      <div className={styles.homeReviewContent}>
        <SwiperComponent>
          <div className={styles.review}>
            <h3 className={styles.reviewName}>Анна</h3>
            <img
                className={styles.reviewIcon}
                src={reviewIcon}
                alt="Иконки рейтинга"
            />
            <p className={styles.reviewDescription}>
              "Великолепный сервис и безупречный маникюр! Всегда остаюсь довольна
              результатом. Спасибо, NailEnvy!"
            </p>
          </div>
          <div className={styles.review}>
            <h3 className={styles.reviewName}>Наталья</h3>
            <img
                className={styles.reviewIcon}
                src={reviewIcon}
                alt="Иконки рейтинга"
            />
            <p className={styles.reviewDescription}>
              "Обожаю этот салон! Мастера тут настоящие волшебницы с ногтями.
              Очень рекомендую!"
            </p>
          </div>
          <div className={styles.review}>
            <h3 className={styles.reviewName}>Елизавета</h3>
            <img
                className={styles.reviewIcon}
                src={reviewIcon}
                alt="Иконки рейтинга"
            />
            <p className={styles.reviewDescription}>
              "Мои ногти никогда не выглядели так шикарно! Профессиональный подход
              и уютная атмосфера делают этот салон моим любимым местом."
            </p>
          </div>
          <div className={styles.review}>
            <h3 className={styles.reviewName}>София</h3>
            <img
                className={styles.reviewIcon}
                src={reviewIcon}
                alt="Иконки рейтинга"
            />
            <p className={styles.reviewDescription}>
              "Салон маникюра NailEnvy - моя находка! Красивый дизайн и
              невероятное качество услуг делают его лучшим в городе."
            </p>
          </div>
        </SwiperComponent>
      </div>
    </div>
  );
};
