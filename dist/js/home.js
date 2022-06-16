$(document).ready(function () {
  $('.dr-banner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    // vertical: true,
    verticalSwiping: true,
  });
  $('.slider-nav').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    infinite: false,
  });

  $(".dr-book-phone").click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".dr-contact .contact-form").offset().top
    }, "slow");
  });

  setTimeout(function () {
    $("#open-modal-popup").fancybox({animationDuration : 1000}).trigger('click');
  }, 3000);

  })





