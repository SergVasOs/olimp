//product
const onClickProductPopupHandler = (e) => {
	e.preventDefault();

	const el = document.querySelector('.productContent__popup');
	const isOpen = el.classList.contains('productContent__popup_open');
	if (isOpen) {
		el.classList.remove('productContent__popup_open');
	} else {
		el.classList.add('productContent__popup_open');
		updateSwipers(el);
	}
};

new Swiper('.productContent__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 7,
	freeMode: true,
	nested: true,
	slidesOffsetAfter: 14,
});
new Swiper('.productContent__popup__full__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 7,
	freeMode: true,
	slidesOffsetAfter: 14,
});
new Swiper('.productVariants__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 14,
	freeMode: true,
	slidesOffsetAfter: 14,
});

new Swiper('.productContent__gallery__swiper', {
	slidesPerRow: 1,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
	direction: 'vertical',
});

const productContent__popup__handler = document.querySelector('.productContent__popup__handler');
if (productContent__popup__handler) {
	productContent__popup__handler.addEventListener('click', onClickProductPopupHandler);
}

//swiper
new Swiper('.productList__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	freeMode: true,
	slidesOffsetAfter: 14,
});

new Swiper('.setList__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	freeMode: true,
	slidesOffsetAfter: 14,
});

new Swiper('.viewedList__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	freeMode: true,
	slidesOffsetAfter: 14,
});

new Swiper('.catalogGridItem__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 7,
	freeMode: true,
	nested: true,
	slidesOffsetAfter: 10.5,
});

