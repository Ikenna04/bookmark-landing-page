const mail = document.getElementById('mail'),
	errorIcon = document.getElementById('error-icon'),
	errorInfo = document.getElementById('error-info'),
	input = document.getElementById('input'),
	navSection = document.getElementById('nav-section'),
	question = document.querySelectorAll('.fa-questions li'),
	menuIcon = document.querySelectorAll('.nav-icon');

let pattern;

const validateMail = () => {
		pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

		mail.value === ''
			? ((errorInfo.textContent = 'Enter an email address'),
			  (errorIcon.style.display = 'flex'),
			  (input.style.backgroundColor = 'var(--soft-red)'))
			: !mail.value.match(pattern)
			? ((errorInfo.textContent = `Whoops, make sure it's an email`),
			  (errorIcon.style.display = 'flex'),
			  (input.style.backgroundColor = 'var(--soft-red)'))
			: mail.value.match(pattern)
			? ((errorInfo.textContent = 'Check your email please'),
			  (errorIcon.style.display = 'none'),
			  (input.style.backgroundColor = 'var(--soft-blue)'))
			: '';
	},
	clearField = () => {
		errorInfo.textContent = ' ';
		mail.value = '';
		errorIcon.style.display = 'none';
	},
	showNav = () => {
		navSection.classList.toggle('show');
	},
	faqToggle = e => {
		let clickedLi;
		e.target.classList.contains('fa-question')
			? (clickedLi = e.target)
			: e.target.classList.contains('question')
			? (clickedLi = e.target.parentElement)
			: e.target.classList.contains('question')
			? (clickedLi = e.target.parentElement)
			: e.target.parentElement.classList.contains('question')
			? (clickedLi = e.target.parentElement.parentElement)
			: (clickedLi = e.target.parentElement.parentElement.parentElement);

		clickedLi.classList.toggle('show-answer');
	};

document.querySelector('#btn').addEventListener('click', validateMail);
document.querySelector('#input').onclick = clearField;

for (let i = 0; i < menuIcon.length; i++) {
	menuIcon[i].addEventListener('click', showNav);
}

for (let i = 0; i < question.length; i++) {
	question[i].addEventListener('click', faqToggle);
}
