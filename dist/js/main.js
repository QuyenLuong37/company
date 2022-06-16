$(document).ready(function () {
    // JS printPage
    $('[printPage]').click(function () {
        window.print();
        return false;
    });

    $("#toTop").click(function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    });
    // var target = location.hash;
    // if (target.length) {
    //     console.log("tar",target);
    //     $('html,body').animate({
    //         scrollTop: $(window.location.hash).offset().top - 100
    //       });
    // }

    toggleMenu();
    fixedHeader();
    changeFontSize();
    activePage();
    scrollToOtherPage();
    AOS.init({
        duration: 1000,
        once: true,
    })
})
$( window ).resize(function() {
    fixedHeader();
});
// Scroll to ID other page
function scrollToOtherPage(){
    $('html, body').hide();
    if (window.location.hash) {
        setTimeout(function () {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 120
            }, 1000)
        }, 0);
    } else {
        $('html, body').show();
    }
}
// Active menu
function activePage() {
    if ($('.breadcrumb').length) {
        $(".dr-header-navigation .nav-item").removeClass('active');
        var currentPage = $('.breadcrumb .breadcrumb-item:nth-child(2) a').attr('href').split("/").pop();
        $(".dr-header-navigation .nav-item .nav-link").each(function () {
            var linkPage = $(this).attr('href');
            parts = linkPage.split("/").pop();
            if (parts == currentPage) {
                $(this).parent().addClass('active');
            }
        });
    }

};

// Toggle Menu 
function toggleMenu(){
    $(".navbar-toggler").click(function (e) {
        e.preventDefault;
        $('body').toggleClass("toggleMenu");
        $(".nav-open-child").removeClass('show-menu');
        $( ".dr-header-nav-child").hide();
        $( ".nav-child-list").hide();
    });
    $(".nav-open-child").on('click',function(e){
        $(this).toggleClass("show-menu");
        var sibChild = $(this).siblings( ".dr-header-nav-child");
        var sibChild2 = $(this).siblings( ".nav-child-list");
        if ($(this).hasClass("show-menu")) {
            sibChild.slideDown();
            sibChild2.slideDown();
        }
        else {
            sibChild.slideUp();
            sibChild2.slideUp();
        }
    });
}
// Change font size blog detail
function changeFontSize() {
    if ($('.dr-detail-content').length) {
        var fontSizeDF = parseInt($(".dr-detail-content").css("font-size"));
        $('[btn-reset]').on('click', function () {
            // parseInt($(".dr-detail-content").css("font-size")) / 16;
            $(".dr-detail-content").css({
                'font-size': fontSizeDF
            })
        });
        $('[btn-incre]').on('click', function () {
            var fontSize = parseInt($(".dr-detail-content").css("font-size")) / 16;
            fontSize = fontSize + 0.063 + "em";
            $(".dr-detail-content").css({
                'font-size': fontSize
            });
        });
        $('[btn-decre]').on('click', function () {
            var fontSize = parseInt($(".dr-detail-content").css("font-size")) / 16;
            fontSize = fontSize - 0.063 + "em";
            $(".dr-detail-content").css({
                'font-size': fontSize
            });
        });
    }
};

//  check fixed header
function fixedHeader() {
    var wwidth = $(window).width();
    // console.log('with',wwidth);
    if (wwidth > 1024) {
        var prevScrollpos = $('.dr-header-top').height();
        $(window).scroll(function (event) {
            var currentScrollPos = $(window).scrollTop();
            if (currentScrollPos > prevScrollpos) {
                $(".dr-header").addClass('sticky')
            } else {
                $(".dr-header").removeClass('sticky')
            }
        })
    }
}