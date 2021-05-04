const onClickModalHandler = (e) => {
	e.preventDefault();

	const modalId = e.currentTarget.getAttribute('href');
	const modal = document.querySelector(modalId);
	modal.classList.add('modal_show');
};

const onClickModalOverlay = (e) => {
	e.preventDefault();

	const modal = e.currentTarget.closest('.modal');
	modal.classList.remove('modal_show');
};

document.querySelectorAll('a[href^="#modal"]').forEach((el) => el.addEventListener('click', onClickModalHandler));

document.querySelectorAll('.modal__overlay').forEach((el) => el.addEventListener('click', onClickModalOverlay));
