import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function MySelect() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">~~~~ Choose ~~~~</option>
        <option value="Football">Football</option>
        <option value="Gaming">Gaming</option>
        <option value="Mathematic">Mathematic</option>
      </select>
      <br />
      <Link to={"choose/" + selectedOption}>
        {selectedOption !== "" && (<button className="submit-button">Submit</button>)}
      </Link>
    </>
  );
}
