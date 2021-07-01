const swiperSpaceSm = 7;
const swiperSpaceMd = 14;
const swiperSpaceLg = 28;
const mobileBreakPoint = 768;

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
	document.documentElement.classList.add('js-modal');
	updateSwipers(modal);
};

const onClickModalClose = (e) => {
	e.preventDefault();

	const modal = e.currentTarget.closest('.modal');
	modal.classList.remove('modal_show');
	document.documentElement.classList.remove('js-modal');
};

const onClickLayerHandler = (e) => {
	e.preventDefault();

	const layerId = e.currentTarget.getAttribute('href');
	const layer = document.querySelector(layerId);
	layer.classList.add('layer_show');
	document.documentElement.classList.add('js-modal');
	updateSwipers(layer);
};

const onClickLayerClose = (e) => {
	e.preventDefault();

	const layer = e.currentTarget.closest('.layer');
	layer.classList.remove('layer_show');
	document.documentElement.classList.remove('js-modal');
};

const onClickPopperHandler = (e) => {
	e.preventDefault();

	const popperId = e.currentTarget.getAttribute('href');
	const popper = document.querySelector(popperId);

	popper.classList.add('popper_open');
	document.documentElement.classList.add('js-modal');
	updateSwipers(popper);
};

const onClickPopperToggle = (e) => {
	e.preventDefault();

	const popper = e.currentTarget.closest('.popper');
	const isOpen = popper.classList.contains('popper_open');

	if (isOpen) {
		popper.classList.remove('popper_open');
		document.documentElement.classList.remove('js-modal');
	} else {
		popper.classList.add('popper_open');
		document.documentElement.classList.add('js-modal');
		updateSwipers(popper);
	}
};

const onClickTabHandler = (e) => {
	e.preventDefault();

	const activeTabButton = e.currentTarget;
	const tabId = activeTabButton.getAttribute('data-tab');
	const tabs = activeTabButton.closest('.tabs');
	const currentTabButton = tabs.querySelector('.tabs__buttons__item_active');
	const currentTabContent = tabs.querySelector('.tabs__content__item_active');
	const activeTabContent = tabs.querySelector(`.tabs__content__item[data-content-tab="${tabId}"]`);

	currentTabButton.classList.remove('tabs__buttons__item_active');
	activeTabButton.classList.add('tabs__buttons__item_active');
	currentTabContent.classList.remove('tabs__content__item_active');
	activeTabContent.classList.add('tabs__content__item_active');

	updateSwipers(activeTabContent);
};

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

document.querySelectorAll('a[href^="#modal"]').forEach((el) => el.addEventListener('click', onClickModalHandler));

document.querySelectorAll('.modal__close').forEach((el) => el.addEventListener('click', onClickModalClose));

document.querySelectorAll('a[href^="#layer"]').forEach((el) => el.addEventListener('click', onClickLayerHandler));

document.querySelectorAll('.layer__close').forEach((el) => el.addEventListener('click', onClickLayerClose));

document.querySelectorAll('a[href^="#popper"]').forEach((el) => el.addEventListener('click', onClickPopperHandler));

document.querySelectorAll('.popper__close,.popper__handler').forEach((el) => el.addEventListener('click', onClickPopperToggle));

document.querySelectorAll('[data-tab]').forEach((el) => el.addEventListener('click', onClickTabHandler));

document.querySelectorAll('.header__catalogButton').forEach((el) => el.addEventListener('click', onClickCatalogButton));

new Swiper('.menu__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});


//index
new Swiper('.banners__swiper', {
	slidesPerView: 1,
	spaceBetween: swiperSpaceMd,
	pagination: {
		bulletClass: 'swiper-dots-item',
		bulletActiveClass: 'swiper-dots-item-active',
		el: '.swiper-dots',
		clickable: true,
	},
});


//catalog
const onClickCatalogFilterHandler = (e) => {
	e.preventDefault();

	const filterTitle = e.currentTarget;
	const filter = filterTitle.closest('.catalogFilters__filter');
	const opened = filter.classList.contains('catalogFilters__filter_open');

	if (opened) {
		filter.classList.remove('catalogFilters__filter_open');
	} else {
		filter.classList.add('catalogFilters__filter_open');
	}
};

document.querySelectorAll('.catalogFilters__filter__label').forEach((el) => el.addEventListener('click', onClickCatalogFilterHandler));


//product
new Swiper('.productUpgradeInfoLayer__examples__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});
new Swiper('.productUpgradeSelectionLayer__categories__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
});
new Swiper('.productTags__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});


//profile
new Swiper('.orderItem__swiper', {
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