import styles from "./modal.module.css";

export const Modal = ({ isOpenModal, setIsOpenModal, children }) => {
  return (
    <div
      className={
        isOpenModal ? styles.modal + " " + styles.active : styles.modal
      }
      onClick={() => setIsOpenModal(false)}
    >
      <div
        className={
          isOpenModal
            ? styles.modalContent + " " + styles.active
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
