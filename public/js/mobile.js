//common
const onClickCatalogButton = (e) => {
	e.preventDefault();

	const catalogButton = e.currentTarget;
	const mainMenu = document.querySelector('.mainMenu');
	const opened = mainMenu.classList.contains('mainMenu_open');

	if (opened) {
		mainMenu.classList.remove('mainMenu_open');
		catalogButton.classList.remove('header__catalogButton_open');
		document.documentElement.classList.remove('js-modal');
	} else {
		mainMenu.classList.add('mainMenu_open');
		catalogButton.classList.add('header__catalogButton_open');
		document.documentElement.classList.add('js-modal');
		updateSwipers(mainMenu);
	}
};

document.querySelectorAll('.header__catalogButton').forEach((el) => el.addEventListener('click', onClickCatalogButton));

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
new Swiper('.catalogItemGallery__swiper', {
	slidesPerView: 1,
	nested: true,
	preloadImages: false,
	lazy: true,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
});
new Swiper('.catalogListItem__prop .size__swiper, .catalogListItem__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
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
new Swiper('.product__swiper', {
	slidesPerView: 1,
	initialSlide: 1,
	swipeHandler: '.productContent__top__gallery',
});

new Swiper('.productContent__prop .size__swiper, .productContent__prop .color__swiper', {
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

new Swiper('.productContent__top__gallery__swiper', {
	slidesPerRow: 1,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
	direction: 'vertical',
	preloadImages: false,
	lazy: true,
	nested: true,
});



//catalog
new Swiper('.catalogFilterPopup__sort__swiper', {
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


//about-us
new Swiper('.aboutUs__technology__swiper', {
	slidesPerView: 1,
	spaceBetween: swiperSpaceMd,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
});
new Swiper('.aboutUs__gallery__list', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
});