//common
new Swiper('.productList__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});

new Swiper('.viewedList__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});

const onClickFooterMenu = (e) => {
	e.preventDefault();

	const menuTitle = e.currentTarget;
	const menu = menuTitle.closest('.footer__menus__menu');
	const opened = menu.classList.contains('footer__menus__menu_open');

	if (opened) {
		menu.classList.remove('footer__menus__menu_open');
	} else {
		menu.classList.add('footer__menus__menu_open');
	}
};

document.querySelectorAll('.footer__menus__menu__title').forEach((el) => el.addEventListener('click', onClickFooterMenu));


//product
new Swiper('.product__prop .size__swiper, .product__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
});
new Swiper('.productPopper__full__prop .size__swiper, .productPopper__full__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
});
new Swiper('.productVariants__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});

new Swiper('.product__top__gallery__swiper', {
	slidesPerRow: 1,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
	direction: 'vertical',
});


//catalog
new Swiper('.catalogGridItem__prop .size__swiper, .catalogGridItem__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
});
new Swiper('.catalogListItem__prop .size__swiper, .catalogListItem__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
});
new Swiper('.catalogItemGallery__swiper', {
	slidesPerView: 1,
	nested: true,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
});
new Swiper('.catalogFilterLayer__sort__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});


//profile
new Swiper('.profile__info__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
});