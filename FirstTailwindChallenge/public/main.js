const DARK_MODE_BTN = document.getElementById('sun');
const LIGHT_MODE_BTN = document.getElementById('moon');
const PAGE = document.getElementById('page');

DARK_MODE_BTN.addEventListener('click', () => {
	DARK_MODE_BTN.classList.add('hidden');
	LIGHT_MODE_BTN.classList.remove('hidden');
	PAGE.classList.remove('dark');
});

LIGHT_MODE_BTN.addEventListener('click', () => {
	DARK_MODE_BTN.classList.remove('hidden');
	LIGHT_MODE_BTN.classList.add('hidden');
	PAGE.classList.add('dark');
});
