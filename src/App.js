import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#222528";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="React" aboutText="About on react" /> */}
      {/* <Navbar/> */}
      <Navbar title="React" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Textform heading="Enter the text to analyze below" mode={mode}/>
    </>
  );
}

export default App;
