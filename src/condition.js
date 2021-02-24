import * as Comp from "./computation";

function condition(input, operator) {

	let nums = input;

	let num1 = parseInt(nums.split(operator).shift());
	let num2 = parseInt(nums.split(operator).pop());
	let answer = null
	switch (operator) {

		default: console.log(operator);
			break;
		case "+":
			answer = Comp.addition(num1, num2);

			break;
		case "-":
			answer = Comp.subtract(num1, num2);

			break;
		case "*":
			answer = Comp.multiply(num1, num2);

			break;
		case "/":
			answer = Comp.divide(num1, num2);

			break;
	}
	return answer;
}

export default condition;