import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

function ChipInput() {
  const [text, setText] = useState("");
  const [chips, setChips] = useState([]);
  const [validationError, setValidationError] = useState("");

  function removeChip(chipToRemove) {
    // filtering out the chip that the user wants to remove
    const updatedChips = chips.filter((chip) => chip !== chipToRemove);
    setChips(updatedChips);
  }

  function handlePressEnter(e) {
    // don't submit the form if the user presses 'Enter'
    if (e.key === "Enter") e.preventDefault();
    // return if the user pressed a key that is not 'Enter', or the user hasn't typed anything
    if (e.key !== "Enter" || !text) return;
    // need to show error if the user tries to add the same input more than once
    if (chips.includes(text)) {
      return setValidationError("Cannot add the same input more than once");
    }
    // adding the input value to chips array
    setChips((prevState) => [...prevState, e.target.value]);
    // clearing the input box
    setText("");
    // clearing error message
    setValidationError("");
  }

  return (
    <div>
      <label htmlFor="tags">Enter Fields to Extract</label>
      <div className="input-container">
        <ul className="chips">
          {chips.map((chip) => (
            <li key={chip} className="chip">
              <span>{chip}</span>
              <TiDelete onClick={() => removeChip(chip)} tabIndex="0" />
            </li>
          ))}
        </ul>
        <input
          className="
            font-size: 1.6rem;
            background: transparent;
            border: none;
            outline: none;"
          type="text"
          id="tags"
          placeholder="Press Enter to add tag"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handlePressEnter}
        />
      </div>
      {validationError && <p className="error-message">{validationError}</p>}
    </div>
  );
}

export default ChipInput;