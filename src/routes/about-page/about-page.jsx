import styles from "./about-page.module.css";
import AboutImg from "../../assets/about-photo-1.svg";
import MapImg from "../../assets/about-photo-2.svg";
import { Title } from "../../shared/component/title/title";

export const AboutPage = () => {
  return (
    <div className={styles.about}>
      <Title title={"О нас"} />
      <div className={styles.aboutInner}>
        <h2 className={styles.aboutInnerTitle}>
          "2023 год стал для нас особенным – мы открыли нашу первую студию
          маникюра! Это место, где каждая деталь создана для вашей красоты и
          удовольствия. Приглашаем вас погрузиться в мир роскоши и безупречного
          ухода. Добро пожаловать в NailEnvy!"
        </h2>
        <img
          src={AboutImg}
          className={styles.aboutImg}
          alt="Фотография студии"
        />
      </div>
      <div className={styles.aboutInnerReverse}>
        <img src={MapImg} className={styles.aboutImg} alt="Фотография студии" />
        <div className={styles.aboutInnerReverseContent}>
          <h2 className={styles.aboutInnerReverseContentTitle}>
            Адрес салона:
          </h2>
          <address className={styles.aboutInnerReverseContentAddress}>
            Набережная реки Мойки, дом 45-67, парадная 6
          </address>
        </div>
      </div>
    </div>
  );
};
