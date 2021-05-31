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
	spaceBetween: swiperSpaceTh,
	freeMode: true,
	nested: true,
	slidesOffsetAfter: boxPadding,
});
new Swiper('.productContent__popup__full__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceTh,
	freeMode: true,
	slidesOffsetAfter: boxPadding,
});
new Swiper('.productVariants__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	slidesOffsetAfter: boxPadding,
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
	spaceBetween: swiperSpaceMd,
	freeMode: true,
	slidesOffsetAfter: boxPadding,
});

new Swiper('.setList__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
	slidesOffsetAfter: boxPadding,
});

new Swiper('.viewedList__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
	slidesOffsetAfter: boxPadding,
});

new Swiper('.catalogGridItem__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceTh,
	freeMode: true,
	nested: true,
	slidesOffsetAfter: catalogItemPadding,
});
new Swiper('.catalogListItem__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceTh,
	freeMode: true,
	nested: true,
	slidesOffsetAfter: catalogItemListPadding,
});

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