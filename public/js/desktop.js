new Swiper('.productList__swiper', {
	slidesPerView: 4,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

new Swiper('.setList__swiper', {
	slidesPerView: 4,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

new Swiper('.viewedList__swiper', {
	slidesPerView: 6,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

new Swiper('.catalogGridItem__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 7,
	freeMode: true,
	nested: true,
	slidesOffsetAfter: 10.5,
});

new Swiper('.productContent__size .size__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 7,
	freeMode: true,
	nested: true,
	slidesOffsetAfter: 10.5,
});