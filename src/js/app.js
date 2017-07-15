import 'slick-carousel';
import 'slick-lightbox';


$(".slider").slick({
	nextArrow: $('.content__nav__img--next'),
	prevArrow: $('.content__nav__img--previous'),
});

$('.content__sidebar__img').slickLightbox();