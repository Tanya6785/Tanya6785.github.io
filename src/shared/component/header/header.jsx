import {Link} from "react-router-dom";
import styles from "./header.module.css";
import {
    ROUTE_ABOUT,
    ROUTE_HOME,
    ROUTE_PORTFOLIO,
    ROUTE_PRICE,
    ROUTE_RECORD,
    ROUTE_REVIEW,
} from "../../constants/routes";
import {useState, useEffect} from "react";
import {MobileMenu} from "../mobile-menu/mobile-menu.jsx";

export const Header = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };

        const body = document.querySelector('body');

        if (menuIsActive) {
            body.classList.add('lock')
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            body.classList.remove('lock');
        };


    }, [menuIsActive]);

    const handleMenuToggle = () => {
        setMenuIsActive(!menuIsActive);
    };

    return (
        <>
            <header className={styles.header}>
                {width >= 769 ? (
                    <>
                        <nav className={styles.headerNav}>
                            <Link to={ROUTE_PRICE} className={styles.headerNavButton}>
                                Цены
                            </Link>
                            <Link to={ROUTE_ABOUT} className={styles.headerNavButton}>
                                О нас
                            </Link>
                            <Link to={ROUTE_REVIEW} className={styles.headerNavButton}>
                                Отзывы
                            </Link>
                            <Link to={ROUTE_PORTFOLIO} className={styles.headerNavButton}>
                                Портфолио
                            </Link>
                        </nav>
                        <Link to={ROUTE_HOME} className={styles.headerLogo}>
                            <p className={styles.logoText}>NailEnvy</p>
                        </Link>
                        <Link to={ROUTE_RECORD} className={styles.headerBtn}>
                            Записаться
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to={ROUTE_HOME} className={styles.headerLogo}>
                            <p className={styles.logoText}>NailEnvy</p>
                        </Link>
                        <button
                            onClick={handleMenuToggle}
                            className={menuIsActive ? styles.headerBtnBurger + " " + styles.open : styles.headerBtnBurger}
                        >
                            <span/>
                        </button>
                    </>
                )}
                <MobileMenu isOpen={menuIsActive} onClose={handleMenuToggle}/>
            </header>
        </>
    );
};
