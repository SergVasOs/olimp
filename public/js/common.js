const updateSwipers = (el) => {
	el.querySelectorAll('.swiper-container').forEach(swiperContainer => {
		swiperContainer.swiper.update();
	});
};

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
	updateSwipers(layer);
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

new Swiper('.catalogItemGallery__swiper', {
	slidesPerView: 1,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
	nested: true,
});

//product
new Swiper('.productUpgradeInfoLayer__examples__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	freeMode: true,
	slidesOffsetAfter: 17.5,
	breakpoints: {
		768: {
			slidesOffsetAfter: 31.5,
		},
	},
});
new Swiper('.productTags__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	freeMode: true,
	slidesOffsetAfter: 14,
	breakpoints: {
		768: {
			slidesOffsetAfter: 0,
		},
	},
});