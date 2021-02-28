import React from "react";

function KeyboardButtons(props) {

	function passClick(event) {
		const number = event.target.value;
		const isNumber = props.isNumber;
		const newValue = {
			value: number,
			isNumber: isNumber
		}
		props.onClick(newValue)
	}

	return (
		<button
			value={props.value}
			onClick={passClick}
		>
			{props.value}
		</button>
	)
};

export default KeyboardButtons;