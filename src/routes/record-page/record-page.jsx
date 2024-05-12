import { useState } from "react";
import { Modal } from "../../shared/component/modal/modal";
import { Title } from "../../shared/component/title/title";

import { Link } from "react-router-dom";

import { ROUTE_HOME } from "../../shared/constants/routes";

import styles from "./record-page.module.css";

export const RecordPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.record}>
      <Title title={"Запись"} />
      <div className={styles.recordInner}>
        <div className={styles.recordInnerItem}>
          <h2 className={styles.recordInnerLabel}>Услуга</h2>
          <div>
            <label
              htmlFor="gel-polish-coating"
              className={styles.recordCheckboxLabel}
            >
              <input
                type="checkbox"
                id="gel-polish-coating"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>
                Покрытие гель-лаком*
              </span>
            </label>
          </div>
          <div>
            <label htmlFor="building-up" className={styles.recordCheckboxLabel}>
              <input
                type="checkbox"
                id="building-up"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>Наращивание*</span>
            </label>
          </div>
          <div>
            <label htmlFor="manicure" className={styles.recordCheckboxLabel}>
              <input
                type="checkbox"
                id="manicure"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>Маникюр*</span>
            </label>
          </div>
          <div>
            <label
              htmlFor="uncoated-manicure"
              className={styles.recordCheckboxLabel}
            >
              <input
                type="checkbox"
                id="uncoated-manicure"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>
                Маникюр без покрытия
              </span>
            </label>
          </div>
          <div>
            <label
              htmlFor="men's-manicure"
              className={styles.recordCheckboxLabel}
            >
              <input
                type="checkbox"
                id="men's-manicure"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>Мужской маникюр</span>
            </label>
          </div>
          <div>
            <label
              htmlFor="children's-manicure"
              className={styles.recordCheckboxLabel}
            >
              <input
                type="checkbox"
                id="children's-manicure"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>Детский маникюр</span>
            </label>
          </div>
          <div>
            <label
              htmlFor="strengthening-nails"
              className={styles.recordCheckboxLabel}
            >
              <input
                type="checkbox"
                id="strengthening-nails"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>
                Укрепление ногтей
              </span>
            </label>
          </div>
          <div>
            <label htmlFor="nail-repair" className={styles.recordCheckboxLabel}>
              <input
                type="checkbox"
                id="nail-repair"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>Ремонт ногтя</span>
            </label>
          </div>
          <div>
            <label htmlFor="withdrawal" className={styles.recordCheckboxLabel}>
              <input
                type="checkbox"
                id="withdrawal"
                className={styles.recordCheckbox}
              />
              <span className={styles.recordCheckboxView}>
                <svg
                  className={styles.recordCheckboxIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  viewBox="0 0 511.985 511.985"
                >
                  <path
                    fill="#fff"
                    d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                  />
                </svg>
              </span>
              <span className={styles.recordInnerService}>Снятие</span>
            </label>
          </div>
          <p className={styles.recordInnerText}>
            *включены в стоимость: маникюр, снятие, дизайн любой сложности
          </p>
        </div>
        <div className={styles.recordInnerItem}>
          <label className={styles.recordInnerLabel} htmlFor="date">
            Дата
          </label>
          <input className={styles.recordInnerInput} id="date" type="date" />
          <label className={styles.recordInnerLabel} htmlFor="name">
            Имя
          </label>
          <input className={styles.recordInnerInput} id="name" type="text" />
        </div>
        <div className={styles.recordInnerItem}>
          <label className={styles.recordInnerLabel} htmlFor="time">
            Время
          </label>
          <input className={styles.recordInnerInput} id="time" type="time" />
          <label className={styles.recordInnerLabel} htmlFor="phone">
            Контактный телефон
          </label>
          <input className={styles.recordInnerInput} id="phone" type="phone" />
        </div>
      </div>
      <button className={styles.recordBtn} onClick={() => setIsOpenModal(true)}>
        Записаться
      </button>
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <p className={styles.recordText}>Запись успешно создана.</p>
        <p className={styles.recordText}>Спасибо огромное!!!</p>
        <Link className={styles.recordBtn} to={ROUTE_HOME}>
          Вернуться на главную страницу
        </Link>
      </Modal>
    </div>
  );
};
