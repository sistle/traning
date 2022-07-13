const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu");
const headerBody = document.querySelector('.header');

function delay(time, status) {
	setTimeout(() => {
		open = status;
	}, time);
}
iconMenu.addEventListener("click", openCloseMenu);

function openCloseMenu(event) {
	if (iconMenu && open) {
		open = false;
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
		headerBody.classList.toggle("active");
		delay(500, true);
	}
}



let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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