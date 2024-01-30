import styles from "./education.module.css";
export default function Education() {
  return (
    <div className={styles.educationDiv}>
      <h2>Educational Experience</h2>
      <div className={styles.inputDiv}>
        <label>School Name:</label>
        <input type="text" />
      </div>
      <div className={styles.inputDiv}>
        <label>Title of Study:</label>
        <input type="text" />
      </div>
      <div className={styles.inputDiv}>
        <label>Date of Study:</label>
        <input type="date" />
      </div>
    </div>
  );
}
