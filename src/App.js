import React, { useState } from 'react';
import './App.css';
// import * as Comp from './computation.js';
import KeyboardButtons from "./components/KeyboardButtons";
import Display from "./components/Display";
import condition from "./condition";

function App(props) {
  const [input, setInput] = useState("");
  // const [operator, setOperator] = useState("");

  function handleNumClick(event) {

    let operator = null
    console.log("check NaN = " + isNaN(input));

    const value = event.target.value;

    if (value.includes("AC")) {

      setInput("");

    } else if (value.includes('=')) {

     console.log(condition(input, operator));
      
    } else if (value.includes("+") || value.includes("-") || value.includes("*") || value.includes("/")) {

      operator = value;
      setInput(input + value);

    } else {
      setInput(input + value)
    }
    setInput()
  }


  return (
    <div className="App">
      <div className="calculator">

        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "=", "AC"].map(i =>
          <KeyboardButtons passFn={handleNumClick} number={i} />)
        }
        <Display input={input} />
      </div>


    </div>
  );

}

export default App;