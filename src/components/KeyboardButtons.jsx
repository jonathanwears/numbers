import React from "react";

function keyboardButtons(props) {

	return (
		<button
			key={props.number}
			value={props.number}
			onClick={props.passFn}
		>
			{props.number}
		</button>
	)

};

export default keyboardButtons;