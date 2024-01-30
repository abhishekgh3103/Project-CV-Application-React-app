import styles from "./buttons.module.css";

export default function Buttons({ infoDisplay, setInfoDisplay }) {
  return (
    <div className={styles.buttonDiv}>
      {infoDisplay ? (
        <button
          type="button"
          className={styles.editButton}
          onClick={(e) => setInfoDisplay(false)}
        >
          Edit
        </button>
      ) : (
        <button
          type="submit"
          className={styles.submitButton}
          onClick={(e) => setInfoDisplay(true)}
        >
          Submit
        </button>
      )}
    </div>
  );
}
