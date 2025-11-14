import React, { useState } from "react";

export default function TextUtils() {
  const [text, setText] = useState("ENTER TEXT HERE");
  function handleUpperCase() {
    setText(text.toUpperCase());
  }
  function handleLowerCase() {
    setText(text.toLowerCase());
  }
  function handleClear() {
    setText("");
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  function copyText() {
    navigator.clipboard.writeText(text);
  }

  return (
    <>
      <textarea
        rows={10}
        cols={50}
        name="text"
        id="text"
        onChange={handleChange}
        value={text}
      ></textarea>
      <br />
      <button onClick={handleUpperCase}>
        UPPERCASE
      </button>
      <button className="mx-2" onClick={handleLowerCase}>
        LOWERCASE
      </button>
      <button className="mx-2" onClick={handleClear}>
        CLEAR
      </button>
      <button className="mx-2" onClick={copyText}>COPY</button>
      <br />
      <br />

      <h3>PREVIEW</h3>
      <p>{text}</p>

      <h4>TIME TAKEN TO READ {0.008*text.length}minutes</h4>
      <p>no of characters {text.length} no of words {text.split(" ").length}</p>
    </>
  );
}
