import { SwiperComponent } from "../../shared/component/swiper/swiper-component";
import styles from "./review-page.module.css";
import reviewIcon from "../../assets/review-icon.svg";
import {Title} from "../../shared/component/title/title.jsx";

export const ReviewPage = () => {
  return (
    <div className={styles.reviewInner}>
      <Title title="Отзывы" className={styles.reviewTitle}/>
      <div className={styles.reviewContent}>
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
