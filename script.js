let btnClick = document.querySelector('.clicker__btn');
let btnForceClick = document.querySelector('.clicker__up');
let countField = document.querySelector('.clicker__count');
let clickField = document.querySelector('.clicker__clicks span');
let needCountField = document.querySelector('.clicker__up span');
let clickForceField = document.querySelector('.clicker__clickForce span');
let pushField = document.querySelector('.push');
let clickCount = 0;
let clickForce = 1;
let upgradeCost = 50;
let countClicks = 0;

function clicker() {
	countClicks++;
	clickCount += clickForce;
	if (clickCount >= 50) {
		pushField.classList.remove('d-n');
	}
	if (clickCount >= upgradeCost) {
		btnForceClick.removeAttribute('disabled');
	}
	countField.innerText = clickCount;
	clickField.innerText = countClicks;
}

btnClick.onclick = clicker;

function clickForceUp() {
	clickForce += 5;
	clickCount -= upgradeCost;
	countField.innerText = clickCount;
	upgradeCost *= 2;
	if (clickCount < upgradeCost) {
		btnForceClick.setAttribute('disabled', 'disabled');
	}
	needCountField.innerText = upgradeCost;
	clickForceField.innerText = clickForce;
}

btnForceClick.onclick = clickForceUp;
