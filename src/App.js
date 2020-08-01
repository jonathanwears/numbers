import React, { useState } from 'react';
import './App.css';
import * as Comp from './computation.js'

function App(props) {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  function condition(input) {

      const errorMessages = {
        'noOperator': "Error: There is no operator!",
        'NaN': "Not enough numbers (NaN)"
      }


    let nums = input;
     /* 
      if (input === null) {
        setInput("");
        setErrorMessage(errorMessages.NaN);
        
      }
        else if(input.includes("+") !== true||input.includes("-") !== true||input.includes("*") !== true||input.includes("/") !== true) {
          setErrorMessage(errorMessages.noOperator)
          setInput("");
          
          }else {
                
          console.log("after error")
*/
          let num1 = parseInt(nums.split(operator).shift());
          let num2 = parseInt(nums.split(operator).pop());

          switch(operator) {

            case "+": 
              setInput(Comp.addition(num1, num2));
              break;
            case "-":
              setInput(Comp.subtract(num1, num2));
              break;
            case "*":
              setInput(Comp.multiply(num1, num2));
              break;
            case "/":
              setInput(Comp.divide(num1, num2));
            break;
          }
      
        }

      function handleNumClick(e) {

        const operations = {
          '+': Math.addition,
        };

        const value = e.target.value;


        if(value.includes('=')) {
            condition(input)

          }else if(value.includes("AC")) {

            setInput("");

            }else if(value.includes("+")||value.includes("-")||value.includes("*")||value.includes("/") ) {

              setOperator(value);
              setInput(input + value);

              }else {
              setInput(input + value)
            }
      
  }
  
      return ( 
        <div className="App">
          

          {[0,1,2,3,4,5,6,7,8,9,"+","-","*","/","=","AC"].map(i =>
          
          <button 
          value= {i}
          onClick={handleNumClick} 
          >
          {i}
          </button>
  
          )}  

      <p>{input}</p>
      <p>{errorMessage}</p>
        </div>
      );
        
}

export default App;