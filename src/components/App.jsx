import React, { useState } from "react";
import InputArea from "./InputArea";
import WarningIcon from "@material-ui/icons/Warning";

function App() {
  const [calBAC, setBAC] = useState(0);
  const [condition, setCondition] = useState(false);

  function calcItem(inputInfo) {
    const floor = Math.floor;
    const Drinks = floor(parseFloat(inputInfo.numDrinks));
    const Weight = floor(parseFloat(inputInfo.bodyWeight)) * 1000;
    const genderNum = parseFloat(inputInfo.gender);
    const calResult = ((12 * Drinks) / (Weight * genderNum)) * 100;
    const roundedResult = Math.round(calResult * 100) / 100;

    setBAC(roundedResult);

    setCondition(() => {
      if (roundedResult >= 0.08) {
        return true;
      } else {
        return false;
      }
    });

    document.getElementById("display").style.display = "block";
  }

  return (
    <div className="container">
      <div className="heading">
        <img
          className="Beerimg"
          src="https://png.pngitem.com/pimgs/s/185-1852551_gfycat-gif-brewery-beer-stein-beer-gif-beer.png"
          alt="Beer"
        />
        <h1>Blood Alcohol Content</h1>
      </div>
      <InputArea onCalc={calcItem} />
      <div id="display" style={{ display: "none" }}>
        <h1>Your BAC level is {calBAC}</h1>
        <h1>
          {condition
            ? "You are intoxicated and not permitted to drive!"
            : "You are permitted to drive."}
        </h1>
      </div>

      <div className="warning">
        <h2>
          <WarningIcon />
          Warning
        </h2>
        <ul>
          <li>
            <b>The Widmark formula is only a rough indicator of BAC.</b>
          </li>

          <li>
            <b>
              It is never okay to drive after drinking regardless of what you
              may calculate as your BAC using this formula.
            </b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
