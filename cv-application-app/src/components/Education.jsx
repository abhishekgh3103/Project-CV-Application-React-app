import styles from "./education.module.css";
export default function Education({ educationInfo, setEducationInfo }) {
  return (
    <div className={styles.educationDiv}>
      <h2>Educational Experience</h2>
      <div className={styles.inputDiv}>
        <label>School Name:</label>
        <input
          type="text"
          value={educationInfo.schlName}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, schlName: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Title of Study:</label>
        <input
          type="text"
          value={educationInfo.titleStudy}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, titleStudy: e.target.value })
          }
        />
      </div>
      <div className={styles.inputDiv}>
        <label>Date of Study:</label>
        <input
          type="date"
          value={educationInfo.dateStudy}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, dateStudy: e.target.value })
          }
        />
      </div>
    </div>
  );
}
