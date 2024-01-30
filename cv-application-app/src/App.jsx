import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import General from "./components/General";
import Practical from "./components/Practical";
import Buttons from "./components/Buttons";

function App() {
  const [infoDisplay, setInfoDisplay] = useState(false);
  return (
    <>
      {infoDisplay ? (
        <Buttons />
      ) : (
        <>
          <General />
          <Education />
          <Practical />
          <Buttons />
        </>
      )}
    </>
  );
}

export default App;
