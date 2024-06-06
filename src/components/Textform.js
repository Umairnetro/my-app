import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    console.log("Lowercase button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Right way to change the state - in my case is not working i think bcz of new update in react
  return (
    <>
      <div className="container mt-4">
        <h2 className={"text-primary mb-2"}>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#2b3035" : "white",
              color: props.mode === "dark" ? "white" : "#2b3035",
            }}
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary ms-3" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary ms-3" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary ms-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary ms-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#222" }}
      >
        <h2 className="text-primary">Text Counter</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Its take {0.008 * text.split(" ").length} Minutes to Read</p>
        <h3 className="text-primary">Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
      </div>
    </>
  );
}
