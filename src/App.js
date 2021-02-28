import React, { useEffect, useState } from 'react';
import './App.css';
import Computation from './computation.js';
import KeyboardButtons from "./components/KeyboardButtons";
import Display from "./components/Display";

function App(props) {
  const [displayNumber, setDisplayNumber] = useState([]);
  const [operator, setOperator] = useState("");
  const [numValue, setNumValue] = useState([]);
  const [workingValue, setWorkingValue] = useState([]);

  function handleNumberClick(event) {
    const { value, isNumber } = event;

    //sets the working value and the displayed number
    setWorkingValue((prevNumber) => {
      return [
        ...prevNumber,
        value
      ]
    })
    setDisplayNumber((prevNumber) => {
      return [
        ...prevNumber,
        value
      ]
    })
    //checks if the value is an operator. sets the operator and reduces the working value, and sets the number value. clears the working value.
    if (!isNumber) {
          
      setOperator(value);
      setNumValue((prevNumber) => {
        const reducer = (accumlator, currentValue) => accumlator + currentValue;
        const reducedNum = workingValue.reduce(reducer);
        return [
          ...prevNumber,
          reducedNum
        ]
      })
      //sets working value to empty
      setWorkingValue([]);
    };

  };

  useEffect(() => {
    if (numValue.length >= 2) {
      calculate();
    }
  });

  function calculate() {
    const answer = Computation(numValue, operator);
    setDisplayNumber(answer)
  }

  function handleSpecialClick(event) {
    const { value } = event;

    if (value === "=") {
      const reducer = (accumlator, currentValue) => accumlator + currentValue;
      setNumValue((prevNumber) => {
        const reducedNum = workingValue.reduce(reducer)
        return [
          ...prevNumber,
          reducedNum
        ]
      })

      setWorkingValue([]);
      setDisplayNumber([]);

    } else if ("AC") {
      clearValues()

    } else {
      console.log(value);
    }

  };

  function clearValues() {
    setDisplayNumber([]);
    setNumValue([]);
    setOperator("");
    setWorkingValue([]);
  };

  return (
    <div className="App">
      <div className="calculator">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) =>
            <KeyboardButtons
              isNumber={true}
              key={index}
              value={number}
              onClick={handleNumberClick}
            />)
        }
        {
          ["+", "-", "*", "/",].map((operator, index) =>
            <KeyboardButtons
              isNumber={false}
              key={index}
              value={operator}
              onClick={handleNumberClick}
            />)
        }
        {
          ["=", "AC"].map((operator, index) =>
            <KeyboardButtons
              isNumber={false}
              key={index}
              value={operator}
              onClick={handleSpecialClick}
            />)
        }

        <Display
          value={displayNumber} />
      </div>
    </div>
  );
}

export default App;