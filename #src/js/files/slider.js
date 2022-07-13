
	new Swiper('.intro__slider', {
	centeredSlides: true,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	watchOverflow: true,
	
	navigation: {
   nextEl: '.swipper-control__btn--next',
   prevEl: '.swipper-control__btn--prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + ' ">' + (index+1) + '</span>'
		}
	},
});