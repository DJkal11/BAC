import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";

function InputArea(props) {
  const [Input, setInput] = useState({
    numDrinks: "",
    bodyWeight: "",
    gender: ""
  });

  function getInput(event) {
    const { name, value } = event.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function getGenderValue(event) {
    const { name, value } = event.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  return (
    <div className="form">
      <label>Number of Drinks</label>
      <input onChange={getInput} name="numDrinks" value={Input.numDrinks} />

      <label>Bodyweight(Kg)</label>
      <input onChange={getInput} name="bodyWeight" value={Input.bodyWeight} />

      <div className="dropBox">
        <label>Gender</label>
        <select
          onChange={getGenderValue}
          name="gender"
          value={Input.gender}
          id="Gender"
        >
          <option value="">--Please choose an option--</option>
          <option name="gender" value={0.68}>
            Male
          </option>
          <option name="gender" value={0.55}>
            Female
          </option>
        </select>
      </div>

      <div className="dropBox">
        <button
          onClick={() => {
            props.onCalc(Input);
          }}
        >
          <span>
            Calculate <FaBeer className="icon" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default InputArea;
