import { Link } from "react-router-dom";
import styles from "./mobile-menu.module.css";
import {
    ROUTE_ABOUT,
    ROUTE_PORTFOLIO,
    ROUTE_PRICE,
    ROUTE_RECORD,
    ROUTE_REVIEW,
} from "../../constants/routes.js";

export const MobileMenu = ({ isOpen, onClose }) => {
    const menuClass = isOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu;

    return (
        <nav className={menuClass}>
            <Link to={ROUTE_PRICE} className={styles.mobileMenuLink} onClick={onClose}>
                Цены
            </Link>
            <Link to={ROUTE_ABOUT} className={styles.mobileMenuLink} onClick={onClose}>
                О нас
            </Link>
            <Link to={ROUTE_REVIEW} className={styles.mobileMenuLink} onClick={onClose}>
                Отзывы
            </Link>
            <Link to={ROUTE_PORTFOLIO} className={styles.mobileMenuLink} onClick={onClose}>
                Портфолио
            </Link>
            <Link to={ROUTE_RECORD} className={styles.mobileMenuLink} onClick={onClose}>
                Записаться
            </Link>
        </nav>
    );
};
