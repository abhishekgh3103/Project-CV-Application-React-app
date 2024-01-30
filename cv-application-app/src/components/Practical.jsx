import styles from "./practical.module.css";

export default function Practical() {
  return (
    <div className={styles.practicalDiv}>
      <h2>Practical Experience</h2>
      <div className={styles.inputDiv}>
        <label>Company Name:</label>
        <input type="text" />
      </div>
      <div className={styles.inputDiv}>
        <label>Position Title:</label>
        <input type="text" />
      </div>
      <div className={styles.inputDiv}>
        <label>Responsibilites of your Job</label>
        <input type="text" />
      </div>
      <div className={styles.inputDiv}>
        <label>Date from:</label>
        <input type="date" />
      </div>
      <div className={styles.inputDiv}>
        <label>Date untill:</label>
        <input type="date" />
      </div>
    </div>
  );
}
