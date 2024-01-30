import styles from "./general.module.css";

export default function General({ generalInfo, setGeneralInfo }) {
  return (
    <div className={styles.generalDiv}>
      <h2>General Information</h2>
      <div className={styles.inputDiv}>
        <label>Name:</label>
        <input
          type="text"
          value={generalInfo.name}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, name: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Email:</label>
        <input
          type="email"
          value={generalInfo.email}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, email: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Phone Number:</label>
        <input
          type="tel"
          value={generalInfo.phNum}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, phNum: e.target.value })
          }
        />
      </div>
    </div>
  );
}
