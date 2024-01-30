import styles from "./practical.module.css";

export default function Practical({ practicalInfo, setPracticalInfo }) {
  return (
    <div className={styles.practicalDiv}>
      <h2>Practical Experience</h2>
      <div className={styles.inputDiv}>
        <label>Company Name:</label>
        <input
          type="text"
          value={practicalInfo.compName}
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, compName: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Position Title:</label>
        <input
          type="text"
          value={practicalInfo.posTitle}
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, posTitle: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Responsibilities of your Job</label>
        <input
          type="text"
          value={practicalInfo.resJob}
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, resJob: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Date from:</label>
        <input
          type="date"
          value={practicalInfo.dateFrom}
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, dateFrom: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Date until:</label>
        <input
          type="date"
          value={practicalInfo.dateUntil}
          onChange={(e) =>
            setPracticalInfo({ ...practicalInfo, dateUntil: e.target.value })
          }
        />
      </div>
    </div>
  );
}
