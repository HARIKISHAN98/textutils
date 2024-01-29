import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const changeToUpperCase = () => {
    const UpperCaseText = text.toUpperCase();
    setText(UpperCaseText);
    props.showAlert("Text Change to UpperCase", "sucess");
  };

  const changeToLowerCase = () => {
    const LowerCaseText = text.toLowerCase();
    setText(LowerCaseText);
    props.showAlert("Text Change to LowerCase", "sucess");
  };

  const changeTextonChange = (event) => {
    setText(event.target.value);
  };

  const ClearText = () => {
    setText("");
    props.showAlert("Text has been clear", "sucess");
  };

  const Capatilize = () => {
    const DemoText = text
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(DemoText);
    props.showAlert("Text Change to Capatilize", "sucess");
  };

  const RemoveExtraSpace = () => {
    const OutputString = text.replace(/\s+/g, " ").trim();
    setText(OutputString);
    props.showAlert("Remove extra space", "sucess");
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to ClipBoard", "sucess");
  };

  //Count the words
  const countWords = (str) => {
    const trimmedStr = str.trim(); // Remove leading and trailing spaces
    const wordArray = trimmedStr === "" ? [] : trimmedStr.split(/\s+/);
    return Math.max(wordArray.length, 0); // Subtract 1 from the count (minimum 0)
  };

  return (
    <>
      <div className="container ">
        <h2
          className="m-2"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            placeholder="Enter Something here..."
            value={text}
            rows="8"
            onChange={changeTextonChange}
          ></textarea>
          <button
            type="button"
            className="btn m-3"
            onClick={changeToUpperCase}
            style={{ backgroundColor: props.btnColor }}
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: props.btnColor }}
            onClick={changeToLowerCase}
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            className="btn mx-2"
            onClick={ClearText}
            style={{ backgroundColor: props.btnColor }}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn"
            onClick={Capatilize}
            style={{ backgroundColor: props.btnColor }}
          >
            Capatilize
          </button>
          <button
            type="button"
            className="btn mx-2"
            style={{ backgroundColor: props.btnColor }}
            onClick={RemoveExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            type="button"
            className="btn mx-2"
            onClick={copyToClipBoard}
            style={{ backgroundColor: props.btnColor }}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>{countWords(text)} </b> words <b>{text.length} </b>
          characters{" "}
        </p>
        <p>
          {" "}
          <b>{0.008 * countWords(text)}</b> minutes to read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview here"}
        </p>
      </div>
    </>
  );
}
