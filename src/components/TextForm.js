import React, { useState, useRef } from "react";

// we used {useState} hook to create state variable
// we initialized text, setText state variables using useState

export default function TextForm(props) {
  const inputRef = useRef(null);
  const [text, setText] = useState("Enter text here...");
  // default value of text is 'Enter text here', we can update it using setText
  const handleOnChange = (event) => {
    // console.log("Handle on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("Button was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Upper case", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to Lower case", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    console.log(inputRef.current.value);
    let text = inputRef.current.value;
    // text.select();
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3> {props.heading}</h3>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          ref={inputRef}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#495057" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          rows="6"
        ></textarea>
        {/* onChange is used to enable typing in the text area */}
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container2 my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4> Your text summmary here</h4>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter Your Text To Preview..."}</p>
      </div>
    </>
  );
}
