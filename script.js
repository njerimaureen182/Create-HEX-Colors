// to create an array of hex numbers
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// to target the button:
const hexBtn = document.querySelector('.hex-btn');

// to target the body:
const bodyBg = document.querySelector('body');

// to target the hex class
const hex = document.querySelector('.hex'); 

// to add an event listener to the hex button:
hexBtn.addEventListener('click',getHex);

// to create a callback function for the above line of code:
function getHex() {
	// create a variable to hold a hex color
	let hexColor = '#';
	// to generate the hex code(6 values) from the hex numbers:
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * hexNumbers.length);

		// to add onto the hexColor variable above
		hexColor += hexNumbers[random];

	}

	bodyBg.style.backgroundColor = hexColor;
	hex.innerHTML = hexColor;
}
