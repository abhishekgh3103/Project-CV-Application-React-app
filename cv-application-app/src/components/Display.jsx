import styles from "./display.module.css";
export default function Display({ generalInfo, educationInfo, practicalInfo }) {
  return (
    <div className={styles.displayDiv}>
      <div>
        <p>Name : {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone Number: {generalInfo.phNum}</p>
      </div>
      <div>
        <p>School Name: {educationInfo.schlName}</p>
        <p>Title of Study: {educationInfo.titleStudy}</p>
        <p>Date of Study: {educationInfo.dateStudy}</p>
      </div>
      <div>
        <p>Company Name: {practicalInfo.compName}</p>
        <p>Position Title: {practicalInfo.posTitle}</p>
        <p>Responsibilities of Job: {practicalInfo.resJob}</p>
        <p>Date From: {practicalInfo.dateFrom}</p>
        <p>Date Until: {practicalInfo.dateUntil}</p>
      </div>
    </div>
  );
}
