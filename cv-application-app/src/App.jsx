import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import General from "./components/General";
import Practical from "./components/Practical";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const initialDate = new Date();
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phNum: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    schlName: "",
    titleStudy: "",
    dateStudy: "",
  });
  const [practicalInfo, setPracticalInfo] = useState({
    compName: "",
    posTitle: "",
    resJob: "",
    dateFrom: "",
    dateUntil: "",
  });

  //const [infoList, setInfoList] = useState([]);
  const infoList = [generalInfo, educationInfo, practicalInfo];
  const [infoDisplay, setInfoDisplay] = useState(false);
  return (
    <>
      {infoDisplay ? (
        <>
          <Display
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            practicalInfo={practicalInfo}
          />
          <Buttons infoDisplay={infoDisplay} setInfoDisplay={setInfoDisplay} />
        </>
      ) : (
        <>
          <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
          <Education
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
          />
          <Practical
            practicalInfo={practicalInfo}
            setPracticalInfo={setPracticalInfo}
          />
          <Buttons infoDisplay={infoDisplay} setInfoDisplay={setInfoDisplay} />
        </>
      )}
    </>
  );
}

export default App;
