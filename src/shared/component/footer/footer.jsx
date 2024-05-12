import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import {
  ROUTE_ABOUT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
  ROUTE_PRICE,
  ROUTE_RECORD,
  ROUTE_REVIEW,
} from "../../constants/routes";
import InstagramIcon from "../../../assets/footer-icon-1.svg";
import YoutubeIcon from "../../../assets/footer-icon-2.svg";
import WhatsAppIcon from "../../../assets/footer-icon-3.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerItemLeft}>
          <Link to={ROUTE_HOME} className={styles.footerLogo}>
            NailEnvy
          </Link>
          <div className={styles.footerLinks}>
            <Link to={ROUTE_PRICE} className={styles.footerNavButton}>
              Цены
            </Link>
            <Link to={ROUTE_ABOUT} className={styles.footerNavButton}>
              О нас
            </Link>
            <Link to={ROUTE_REVIEW} className={styles.footerNavButton}>
              Отзывы
            </Link>
            <Link to={ROUTE_PORTFOLIO} className={styles.footerNavButton}>
              Портфолио
            </Link>
          </div>
        </div>
        <div className={styles.footerItemRight}>
          <div className={styles.footerAddress}>
            <a className={styles.footerPhone} href="tel:+71112223344">
              +7(111)222-33-44
            </a>
            <address>Набережная реки Мойки, дом 45-67, парадная 6</address>
          </div>
          <div>
            <Link to={ROUTE_RECORD} className={styles.footerButton}>
              Записаться
            </Link>
            <div className={styles.footerSocialLinks}>
              <img src={InstagramIcon} alt="Иконка инстаграма" />
              <img src={YoutubeIcon} alt="Иконка ютуба" />
              <img src={WhatsAppIcon} alt="Иконка ватсап" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
