$(document).ready(function (){
    var vh = 80;
    $(".menu-h a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-vh+ "px"
        }, {
            duration: 400,
            easing: "swing"
        });
        return false;
    });
    //--------------------------------
    $('.owl-gallery').owlCarousel({
        loop:true,
        margin:16,
        nav:true,
        dots:false,
        lazyLoad: true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    });
    //--------------------------------
    $('[data-fancybox]').fancybox({
        idleTime: false,
        buttons : [
            'download',
            'thumbs',
            'close'
        ],
        afterShow: function( instance, slide ) {
            $('.fancybox-button--download svg path').addClass('animate__animated animate__bounce')
        }
    });
    //--------------------------------

    //--------------------------------
    $('.hamburger').click(function (){
       $(this).toggleClass('is-active');
       $('header').toggleClass('open')
    });
    //--------------------------------

});

$(function() {
    $('.lazy').Lazy();
});