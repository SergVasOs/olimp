//common
const swiperSpaceSm = 7;
const swiperSpaceMd = 14;
const swiperSpaceLg = 28;
const mobileBreakPoint = 768;
const headerHeight = 70;

const updateSwipers = (el) => {
	el.querySelectorAll('.swiper-container').forEach(swiperContainer => {
		swiperContainer.swiper.update();
	});
};

const openPopup = (popup) => {
	closePopups();
	popup.classList.add('popup_invisible');
	document.documentElement.classList.add('js-modal');

	setTimeout(() => popup.classList.remove('popup_invisible'), 500);
	setTimeout(() => {
		popup.classList.add('popup_open');
		updateSwipers(popup);
	}, 0);
};

const closePopup = (popup) => {
	popup.classList.add('popup_invisible');
	document.documentElement.classList.remove('js-modal');

	setTimeout(() => popup.classList.remove('popup_invisible'), 500);
	setTimeout(() => popup.classList.remove('popup_open'), 0);
};

const closePopups = () => {
	document.querySelectorAll('.popup_open:not(.popup_popper)').forEach(popup => {
		closePopup(popup);
	});
};

const openPopper = (popper) => {
	closePopups();
	popper.classList.add('popper_opening');
	document.documentElement.classList.add('js-modal');

	setTimeout(() => {
		popper.classList.remove('popper_opening');
	}, 500);

	setTimeout(() => {
		popper.classList.add('popper_open');
		updateSwipers(popper);
	}, 0);
};

const closePopper = (popper) => {
	popper.classList.add('popper_closing');
	document.documentElement.classList.remove('js-modal');

	setTimeout(() => {
		popper.classList.remove('popper_closing');
	}, 500);

	setTimeout(() => {
		popper.classList.remove('popper_open');
	}, 0);
};

const onClickPopupHandler = (e) => {
	e.preventDefault();

	const popupId = e.currentTarget.getAttribute('href');
	const popup = document.querySelector(popupId);
	openPopup(popup);
};

const onClickPopupClose = (e) => {
	e.preventDefault();

	const popup = e.currentTarget.closest('.popup');
	closePopup(popup);
};

const onClickPopperHandler = (e) => {
	e.preventDefault();

	const popperId = e.currentTarget.getAttribute('href');
	const popper = document.querySelector(popperId);
	openPopper(popper);
};

const onClickPopperClose = (e) => {
	e.preventDefault();

	const popper = e.currentTarget.closest('.popper');
	closePopper(popper);
};

const onClickPopperToggle = (e) => {
	e.preventDefault();

	const popper = e.currentTarget.closest('.popper');
	const isOpen = popper.classList.contains('popper_open');

	if (isOpen) {
		closePopper(popper);
	} else {
		openPopper(popper);
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

document.querySelectorAll('a[href^="#popup"]').forEach((el) => el.addEventListener('click', onClickPopupHandler));

document.querySelectorAll('.popup__close, .popup__overlay').forEach((el) => el.addEventListener('click', onClickPopupClose));

document.querySelectorAll('a[href^="#popper"]').forEach((el) => el.addEventListener('click', onClickPopperHandler));

document.querySelectorAll('.popper__close, .popper__overlay').forEach((el) => el.addEventListener('click', onClickPopperClose));

document.querySelectorAll('.popper__handler').forEach((el) => el.addEventListener('click', onClickPopperToggle));

document.querySelectorAll('[data-tab]').forEach((el) => el.addEventListener('click', onClickTabHandler));

new Swiper('.menu__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});
new Swiper('.catalogGridItem__prop .size__swiper, .catalogGridItem__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
});
new Swiper('.productListItem__prop .size__swiper, .productListItem__prop .color__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	nested: true,
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
new Swiper('.productUpgradeInfoContent__examples__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
});
new Swiper('.productUpgradeSelectionPopup__categories__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
});
new Swiper('.productTags__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
	breakpoints: {
		[mobileBreakPoint]: {
			slidesPerView: 6,
			freeMode: false
		},
	},
});


//profile
new Swiper('.orderItem__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	slidesOffsetAfter: swiperSpaceSm,
	breakpoints: {
		[mobileBreakPoint]: {
			slidesOffsetAfter: 0,
		},
	},
});


