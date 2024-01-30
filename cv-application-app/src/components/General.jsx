import styles from "./general.module.css";

export default function General() {
  return (
    <div className={styles.generalDiv}>
      <h2>General Information</h2>
      <div className={styles.inputDiv}>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div className={styles.inputDiv}>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div className={styles.inputDiv}>
        <label>Phone Number:</label>
        <input type="tel" />
      </div>
    </div>
  );
}
