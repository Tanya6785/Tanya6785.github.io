import { Title } from "../../shared/component/title/title";
import styles from "./portfolio-page.module.css";
import { SwiperComponent } from "../../shared/component/swiper/swiper-component";
import portfolioFirstImg from "../../assets/portfolio-img-1.svg";
import portfolioSecondImg from "../../assets/portfolio-img-2.svg";
import portfolioThirdImg from "../../assets/portfolio-img-3.svg";
import portfolioFourthImg from "../../assets/portfolio-img-4.svg";
import portfolioFifthImg from "../../assets/portfolio-img-5.svg";
import portfolioSixthImg from "../../assets/portfolio-img-6.svg";
export const PortfolioPage = () => {
  return (
    <div className={styles.portfolio}>
      <Title title={"Портфолио"} />
      <div className={styles.portfolioInner}>
        <SwiperComponent slidesPerView={3} spaceBetween={70}>
          <img
            className={styles.portfolioSlide}
            src={portfolioFirstImg}
            alt=""
          />
          <img
            className={styles.portfolioSlide}
            src={portfolioSecondImg}
            alt=""
          />
          <img
            className={styles.portfolioSlide}
            src={portfolioThirdImg}
            alt=""
          />
          <img
            className={styles.portfolioSlide}
            src={portfolioFourthImg}
            alt=""
          />
          <img
            className={styles.portfolioSlide}
            src={portfolioFifthImg}
            alt=""
          />
          <img
            className={styles.portfolioSlide}
            src={portfolioSixthImg}
            alt=""
          />
        </SwiperComponent>
      </div>
    </div>
  );
};
