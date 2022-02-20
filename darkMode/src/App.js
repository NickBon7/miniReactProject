import { useState } from "react";
import Section from "./components/Section";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "lightblue" }}>
          Light Mode
        </span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <span style={{ color: darkMode ? "	#DDA0DD" : "grey" }}>Dark Mode</span>
      </div>
      <Section />
      
    </div>
  );
}

export default App;
