//common
const onClickCatalogButton = (e) => {
	e.preventDefault();

	const catalogButton = e.currentTarget;
	const mainMenu = document.querySelector('.mainMenu');
	const opened = mainMenu.classList.contains('mainMenu_open');

	if (opened) {
		mainMenu.classList.remove('mainMenu_open');
		catalogButton.classList.remove('header__catalogButton_open');
	} else {
		mainMenu.classList.add('mainMenu_open');
		catalogButton.classList.add('header__catalogButton_open');
		updateSwipers(mainMenu);
	}
};

const onSearchFocus = (e) => {
	e.preventDefault();
	const search = e.currentTarget.closest('.header__search');

	search.classList.add('header__search_active');
};

const onSearchBlur = (e) => {
	e.preventDefault();
	const search = e.currentTarget.closest('.header__search');

	search.classList.remove('header__search_active');
};

const onProductWindowScroll = (e) => {
	const header = document.querySelector('.productHeader');

	if (!header) {
		return;
	}

	const upgradesTop = document.querySelector('.productUpgrades').getBoundingClientRect().top;

	if (upgradesTop < 80) {
		header.classList.add('productHeader_active');
	} else {
		header.classList.remove('productHeader_active');
	}
};

window.addEventListener('scroll', onProductWindowScroll);

document.querySelectorAll('.header__catalogButton').forEach((el) => el.addEventListener('click', onClickCatalogButton));

document.querySelector('.header__search .input__field').addEventListener('focus', onSearchFocus);

document.querySelector('.header__search .input__field').addEventListener('blur', onSearchBlur);

new Swiper('.topBar__subMenu__swiper', {
	slidesPerView: 8,
	spaceBetween: swiperSpaceSm,
	autoHeight: true,
	navigation: {
		nextEl: '.swiper-next',
	},
});
new Swiper('.saleList__swiper', {
	slidesPerView: 3,
	spaceBetween: swiperSpaceMd,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});
new Swiper('.productList__swiper', {
	slidesPerView: 4,
	spaceBetween: swiperSpaceMd,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});
new Swiper('.viewedList__swiper', {
	slidesPerView: 6,
	spaceBetween: swiperSpaceMd,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});
new Swiper('.catalogItemGallery__swiper', {
	slidesPerView: 1,
	nested: true,
	preloadImages: true,
	lazy: true,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
});
new Swiper('.catalogListItem__info__prop .size__swiper, .catalogListItem__info__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
});


//index
new Swiper('.clients__swiper', {
	slidesPerView: 6,
	spaceBetween: swiperSpaceMd,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});


//product
new Swiper('.productBuy__prop .size__swiper, .productBuy__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
});
new Swiper('.productBuy__upgrades__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceLg,
	freeMode: true,
	nested: true,
});
new Swiper('.productContent__gallery__thumbs', {
	slidesPerView: 9,
	spaceBetween: swiperSpaceSm,
	navigation: {
		nextEl: '.swiper-next',
	},
	direction: 'vertical',
});


//set
new Swiper('.set__content__gallery__thumbs', {
	slidesPerView: 9,
	spaceBetween: swiperSpaceSm,
	navigation: {
		nextEl: '.swiper-next',
	},
	direction: 'vertical',
});
