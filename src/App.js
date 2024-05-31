import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      {/* <Navbar title="React" aboutText="About on react" /> */}
      {/* <Navbar/> */}
      <Navbar title="React" aboutText="About" />
      <Textform heading="Enter the text to analyze below" />
    </>
  );
}

export default App;
