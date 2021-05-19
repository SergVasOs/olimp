const onClickModalHandler = (e) => {
	e.preventDefault();

	const modalId = e.currentTarget.getAttribute('href');
	const modal = document.querySelector(modalId);
	modal.classList.add('modal_show');
	document.body.classList.add('js-modal');
};

const onClickModalOverlay = (e) => {
	e.preventDefault();

	const modal = e.currentTarget.closest('.modal');
	modal.classList.remove('modal_show');
	document.body.classList.remove('js-modal');
};

const onClickLayerHandler = (e) => {
	e.preventDefault();

	const layerId = e.currentTarget.getAttribute('href');
	const layer = document.querySelector(layerId);
	layer.classList.add('layer_show');
	document.body.classList.add('js-modal');
};

const onClickLayerClose = (e) => {
	e.preventDefault();

	const layer = e.currentTarget.closest('.layer');
	layer.classList.remove('layer_show');
	document.body.classList.remove('js-modal');
};

document.querySelectorAll('a[href^="#modal"]').forEach((el) => el.addEventListener('click', onClickModalHandler));

document.querySelectorAll('.modal__overlay').forEach((el) => el.addEventListener('click', onClickModalOverlay));

document.querySelectorAll('a[href^="#layer"]').forEach((el) => el.addEventListener('click', onClickLayerHandler));

document.querySelectorAll('.layer__close').forEach((el) => el.addEventListener('click', onClickLayerClose));


//product
const onClickProductPopupHandler = (e) => {
	e.preventDefault();

	const el = document.querySelector('.productContent__popup');
	const isOpen = el.classList.contains('productContent__popup_open');
	if (isOpen) {
		el.classList.remove('productContent__popup_open');
	} else {
		el.classList.add('productContent__popup_open');
	}
};

document.querySelector('.productContent__popup__handler').addEventListener('click', onClickProductPopupHandler);