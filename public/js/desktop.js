new Swiper('.productList__swiper', {
	slidesPerView: 4,
	spaceBetween: swiperSpaceLg,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

new Swiper('.setList__swiper', {
	slidesPerView: 4,
	spaceBetween: swiperSpaceLg,
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
});

new Swiper('.productContent__buy__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: swiperSpaceTh,
	freeMode: true,
	nested: true,
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

new Swiper('.productContent__gallery__thumbs', {
	slidesPerView: 5,
	spaceBetween: swiperSpaceSm,
	navigation: {
		nextEl: '.swiper-next',
	},
	direction: 'vertical',
});