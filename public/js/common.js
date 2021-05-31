const boxPadding = 14;
const layerPaddingDesktop = 31.5;
const layerPaddingMobile = 17.5;
const catalogItemPadding = 10.5;
const catalogItemListPadding = 17.5;
const swiperSpaceTh = 5;
const swiperSpaceSm = 10;
const swiperSpaceMd = 20;
const swiperSpaceLg = 30;
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

const onClickTabHandler = (e) => {
	e.preventDefault();

	const activeTabButton = e.currentTarget;
	const tabId = activeTabButton.getAttribute('data-tab');
	const tabs = activeTabButton.closest('.tabs');
	const currentTabButton = tabs.querySelector('.tabs__buttons__item_active');
	const currentTabContent = tabs.querySelector('.tabs__content__item_active');
	const activeTabContent = tabs.querySelector(`.tabs__content__item[data-tab="${tabId}"]`);

	currentTabButton.classList.remove('tabs__buttons__item_active');
	activeTabButton.classList.add('tabs__buttons__item_active');
	currentTabContent.classList.remove('tabs__content__item_active');
	activeTabContent.classList.add('tabs__content__item_active');

	updateSwipers(activeTabContent);
};

document.querySelectorAll('a[href^="#modal"]').forEach((el) => el.addEventListener('click', onClickModalHandler));

document.querySelectorAll('.modal__overlay').forEach((el) => el.addEventListener('click', onClickModalOverlay));

document.querySelectorAll('a[href^="#layer"]').forEach((el) => el.addEventListener('click', onClickLayerHandler));

document.querySelectorAll('.layer__close').forEach((el) => el.addEventListener('click', onClickLayerClose));

document.querySelectorAll('.tabs__buttons__item').forEach((el) => el.addEventListener('click', onClickTabHandler));

//product
new Swiper('.productUpgradeInfoLayer__examples__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceMd,
	freeMode: true,
	slidesOffsetAfter: layerPaddingMobile,
	breakpoints: {
		[mobileBreakPoint]: {
			slidesOffsetAfter: layerPaddingDesktop,
		},
	},
});
new Swiper('.productUpgradeSelectionLayer__categories__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	slidesOffsetAfter: layerPaddingMobile,
	breakpoints: {
		[mobileBreakPoint]: {
			slidesOffsetAfter: layerPaddingDesktop,
		},
	},
});
new Swiper('.productTags__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceSm,
	freeMode: true,
	slidesOffsetAfter: boxPadding,
	breakpoints: {
		[mobileBreakPoint]: {
			slidesOffsetAfter: 0,
		},
	},
});