import styles from "./app-layout.module.css";
import { Header } from "../../shared/component/header/header.jsx";
import { Footer } from "../../shared/component/footer/footer.jsx";
import { Main } from "../../shared/component/main/main.jsx";

export const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
