import styles from "./buttons.module.css";

export default function Buttons() {
  return (
    <div className={styles.buttonDiv}>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
      <button type="button" className={styles.editButton}>
        Edit
      </button>
    </div>
  );
}
