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

const onClickLayerHandler = (e) => {
	e.preventDefault();

	const layerId = e.currentTarget.getAttribute('href');
	const layer = document.querySelector(layerId);
	layer.classList.add('layer_show');
};

const onClickLayerClose = (e) => {
	e.preventDefault();

	const layer = e.currentTarget.closest('.layer');
	layer.classList.remove('layer_show');
};

document.querySelectorAll('a[href^="#modal"]').forEach((el) => el.addEventListener('click', onClickModalHandler));

document.querySelectorAll('.modal__overlay').forEach((el) => el.addEventListener('click', onClickModalOverlay));

document.querySelectorAll('a[href^="#layer"]').forEach((el) => el.addEventListener('click', onClickLayerHandler));

document.querySelectorAll('.layer__close').forEach((el) => el.addEventListener('click', onClickLayerClose));
