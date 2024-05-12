import { Title } from "../../shared/component/title/title";

import ServiceImgFirst from "../../assets/service-img-1.svg";
import ServiceImgSecond from "../../assets/service-img-2.svg";
import ServiceImgThird from "../../assets/service-img-3.svg";
import ServiceAnotherImgFirst from "../../assets/service-another-img-1.svg";
import ServiceAnotherImgSecond from "../../assets/service-another-img-2.svg";
import ServiceAnotherImgThird from "../../assets/service-another-img-3.svg";
import ServiceAnotherImgFourth from "../../assets/service-another-img-4.svg";
import ServiceAnotherImgFive from "../../assets/service-another-img-5.svg";
import ServiceAnotherImgSix from "../../assets/service-another-img-6.svg";
import { Link } from "react-router-dom";
import { ROUTE_RECORD } from "../../shared/constants/routes";
import styles from "./service-and-price-page.module.css";

export const ServiceAndPricePage = () => {
  return (
    <div className={styles.service}>
      <Title title={"Услуги и цены"} />
      <div className={styles.serviceHeader}>
        <div className={styles.serviceLine} />
        <h2 className={styles.serviceSubtitle}>Популярные услуги</h2>
        <div className={styles.serviceLine} />
      </div>
      <div className={styles.serviceInner}>
        <div className={styles.serviceItem}>
          <div className={styles.serviceSubItem}>
            <img
              className={styles.serviceSubItemImg}
              src={ServiceImgFirst}
              alt="Фотография покрытие гель-лаком"
            />
            <div className={styles.serviceSubItemContent}>
              <p className={styles.serviceSubItemTitle}>Покрытие гель-лаком*</p>
              <button className={styles.serviceSubItemBtn}>2300 рублей</button>
            </div>
          </div>
          <div className={styles.serviceSubItem}>
            <img
              className={styles.serviceSubItemImg}
              src={ServiceImgSecond}
              alt="Фотография маникюра"
            />
            <div className={styles.serviceSubItemContent}>
              <p className={styles.serviceSubItemTitle}>Маникюр</p>
              <button className={styles.serviceSubItemBtn}>1200 рублей</button>
            </div>
          </div>
        </div>
        <div className={styles.serviceSubItemUnique}>
          <div className={styles.serviceSubItemContentUnique}>
            <p className={styles.serviceSubItemTitleUnique}>Наращивание*</p>
            <button className={styles.serviceSubItemBtnUnique}>
              4000 рублей
            </button>
          </div>
          <img
            className={styles.serviceSubItemImgUnique}
            src={ServiceImgThird}
            alt="Фотография наращивание*"
          />
        </div>
      </div>
      <p className={styles.serviceDescription}>
        *включены в стоимость: маникюр, снятие, дизайн любой сложности
      </p>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceLine} />
        <h2 className={styles.serviceSubtitle}>Остальные услуги</h2>
        <div className={styles.serviceLine} />
      </div>
      <div className={styles.serviceAnotherInner}>
        <div className={styles.serviceAnotherSubItem}>
          <img
            className={styles.serviceAnotherSubItemImg}
            src={ServiceAnotherImgFirst}
            alt="Фотография покрытие гель-лаком"
          />
          <div className={styles.serviceAnotherSubItemContent}>
            <p className={styles.serviceAnotherSubItemTitle}>
              Маникюр без покрытия
            </p>
            <button className={styles.serviceAnotherSubItemBtn}>
              1200 <span>рублей</span>
            </button>
          </div>
        </div>
        <div className={styles.serviceAnotherSubItem}>
          <img
            className={styles.serviceAnotherSubItemImg}
            src={ServiceAnotherImgSecond}
            alt="Фотография покрытие гель-лаком"
          />
          <div className={styles.serviceAnotherSubItemContent}>
            <p className={styles.serviceAnotherSubItemTitle}>Мужской маникюр</p>
            <button className={styles.serviceAnotherSubItemBtn}>
              1200 <span>рублей</span>
            </button>
          </div>
        </div>
        <div className={styles.serviceAnotherSubItem}>
          <img
            className={styles.serviceAnotherSubItemImg}
            src={ServiceAnotherImgThird}
            alt="Фотография покрытие гель-лаком"
          />
          <div className={styles.serviceAnotherSubItemContent}>
            <p className={styles.serviceAnotherSubItemTitle}>Детский маникюр</p>
            <button className={styles.serviceAnotherSubItemBtn}>
              1400 <span>рублей</span>
            </button>
          </div>
        </div>
        <div className={styles.serviceAnotherSubItem}>
          <img
            className={styles.serviceAnotherSubItemImg}
            src={ServiceAnotherImgFourth}
            alt="Фотография покрытие гель-лаком"
          />
          <div className={styles.serviceAnotherSubItemContent}>
            <p className={styles.serviceAnotherSubItemTitle}>
              Укрепление ногтей
            </p>
            <button className={styles.serviceAnotherSubItemBtn}>
              500 <span>рублей</span>
            </button>
          </div>
        </div>
        <div className={styles.serviceAnotherSubItem}>
          <img
            className={styles.serviceAnotherSubItemImg}
            src={ServiceAnotherImgFive}
            alt="Фотография покрытие гель-лаком"
          />
          <div className={styles.serviceAnotherSubItemContent}>
            <p className={styles.serviceAnotherSubItemTitle}>Ремонт ногтя</p>
            <button className={styles.serviceAnotherSubItemBtn}>
              300 <span>рублей</span>
            </button>
          </div>
        </div>
        <div className={styles.serviceAnotherSubItem}>
          <img
            className={styles.serviceAnotherSubItemImg}
            src={ServiceAnotherImgSix}
            alt="Фотография покрытие гель-лаком"
          />
          <div className={styles.serviceAnotherSubItemContent}>
            <p className={styles.serviceAnotherSubItemTitle}>Снятие</p>
            <button className={styles.serviceAnotherSubItemBtn}>
              200 <span>рублей</span>
            </button>
          </div>
        </div>
      </div>
      <Link to={ROUTE_RECORD} className={styles.serviceLink}>
        Записаться
      </Link>
    </div>
  );
};
