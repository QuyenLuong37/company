$(document).ready(function () {


$('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: '.product-slider-nav',
    fade: true,
    autoplay: true
  });
  $('.product-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-slider',
    focusOnSelect: true,
    dots: false,
    arrows: false,
    autoplay: true
  });
// data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "dots": false, "arrows":true, "asNavFor":".slider-nav"}'
// data-slick='{"slidesToShow": 6, "slidesToScroll": 1, "autoplay": true, "dots": false, "arrows":false,"asNavFor": ".slider-for", "focusOnSelect": true,"responsive": [{"breakpoint":575,"settings":{"vertical": false,"slidesToShow": 3}},{"breakpoint":767,"settings":{"vertical": false,"slidesToShow": 4}},{"breakpoint":991,"settings":{"vertical": false,"slidesToShow": 5}}]}'
})