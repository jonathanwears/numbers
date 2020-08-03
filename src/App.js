import React, { useState } from 'react';
import './App.css';
import * as Comp from './computation.js'

function App(props) {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  
  function condition(input) {

    let nums = input;

          let num1 = parseInt(nums.split(operator).shift());
          let num2 = parseInt(nums.split(operator).pop());

          switch(operator) {

            default: ;
            break;
            case "+": 
              const add = Comp.addition(num1, num2);
              setInput(add);
              
              break;
            case "-":
              const subtract = Comp.subtract(num1, num2);
              setInput(subtract);
              
              break;
            case "*":
              const multiply = Comp.multiply(num1, num2);
              setInput(multiply);
             
              break;
            case "/":
              const divide = Comp.divide(num1, num2);
              setInput(divide);
              
            break;
          }
      
        }

  function handleNumClick(e) {

        console.log("check NaN = " + isNaN(input));

        const value = e.target.value;          
              
        if(value.includes("AC")) {
           
          setInput("");
          
          }else if(value.includes('=')) {
   
              condition(input);
              
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
       </div>
      );
        
}

export default App;