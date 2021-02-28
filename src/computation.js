function Computation(value, operator) {

  const [num1, num2] = value;
  const fNum = Number(num1);
  const sNum = Number(num2);
 
  let answer = null;
  switch (operator) {

    default: console.log(operator);
      break;
    case "+":
      answer = addition(fNum, sNum);
      break;
    case "-":
      answer = subtract(fNum, sNum);
      break;
    case "*":
      answer = multiply(fNum, sNum);
      break;
    case "/":
      answer = divide(fNum, sNum);
      break;
  }
  return answer;
}

function addition(num1, num2) {

  return num1 + num2;
};

function subtract(num1, num2) {

  return num1 - num2;
};

function multiply(num1, num2) {

  return num1 * num2;
};

function divide(num1, num2) {

  return num1 / num2;
};


export default Computation;