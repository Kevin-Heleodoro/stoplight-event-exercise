// PART 1
let stopBtn = document.querySelector('#stopButton');
let slowBtn = document.querySelector('#slowButton');
let goBtn = document.querySelector('#goButton');

let stopLight = document.querySelector('#stopLight');
let slowLight = document.querySelector('#slowLight');
let goLight = document.querySelector('#goLight');

stopBtn.addEventListener('click', () => {
	stopLight.classList.toggle('stop');
});

slowBtn.addEventListener('click', () => {
	slowLight.classList.toggle('slow');
});

goBtn.addEventListener('click', () => {
	goLight.classList.toggle('go');
});

// PART 2
let allBtns = document.querySelectorAll('.button');

allBtns.forEach((btn) => {
	btn.addEventListener('mouseenter', () => {
		console.log(`Entered ${btn.textContent} button`);
	});

	btn.addEventListener('mouseleave', () => {
		console.log(`Left ${btn.textContent} button`);
	});
});

// PART 3
allBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let light = btn.textContent.toLowerCase();
		let clickedLight = document.querySelector(`#${light}Light`);

		if (clickedLight.classList.contains(light)) {
			console.log(`${light} bulb on`);
		} else {
			console.log(`${light} bulb off`);
		}
	});
});
