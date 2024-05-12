import { Outlet } from "react-router-dom";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Outlet />
    </div>
  );
};
