$(document).ready(function() {
    $('.banner-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/arrow-left.png" alt="arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="images/arrow-right.png" alt="arrow"></button>'
    });

    $(".menu").click(function() {
        $(this).toggleClass("change");
        $("nav").toggleClass("open");
    });


    // product gallery js start


    $('.pg-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.pg-bottom'
    });
    $('.pg-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.pg-top',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // product gallery js end
});