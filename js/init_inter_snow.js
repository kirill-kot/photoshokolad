jQuery(document).ready(function ($) {

                $('header nav li a').css({
                    "height": "115px",
                    "line-height": "115px"
                });
                $('header .dropdown-content li a').css({
                    "height": "115px",
                    "line-height": "115px"
                }); //высота списка выпадающего меню
                $('header .nav-phone').css({
                    "height": "115px",
                    "line-height": "115px"
                });
                $('header .nav-button').css({
                    "height": "115px",
                    "line-height": "115px"
                });
    $('.button-collapse').sideNav({
        menuWidth: 240, // ширина мобильного меню
        edge: 'left' // сторона меню
        //      closeOnClick: true // закрывается по клику в пустое поле
    });
    $(".dropdown-button").dropdown(); //      выпадающее меню для десктопа

        var textSlider = new Swiper('.text-slider-snow', {
        spaceBetween: 10,
        autoHeight: true
    });
    var picSlider = new Swiper('.pictures-slider-snow', {
        spaceBetween: 10,
        slidesPerView: 1,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    textSlider.params.control = picSlider;
    picSlider.params.control = textSlider;

    setTimeout(function(){
        var curr = textSlider.activeIndex;
        if (curr < 0) {
            $('.text').fadeOut().hide();
        }
    },100);

    //скрипт-авторесайзер видеоконтейнера
    setTimeout(function(){
$(window).resize(function(){
   if($(window).width() > 0 && $(window).width() < 480) {
    var v_cont=".video-container";
    var back_cont=".vid_frame";
    var v_height=$(window).width() * 0.5;
    var v_width=$(window).width() * 0.9;
  $(v_cont).css({"height": v_height, 'width': v_width});
  $(back_cont).css({'width': ($(window).width() * 0.905)});
   }
if($(window).width() > 480 && $(window).width() < 601) {
    var v_cont=".video-container";
    var back_cont=".vid_frame";
    var v_height=$(window).width() * 0.49;
    var v_width=$(window).width() * 0.88;
  $(v_cont).css({"height": v_height, 'width': v_width});
  $(back_cont).css({'width': ($(window).width() * 0.9)});
}
    if($(window).width() > 600 && $(window).width() < 769) {
    var v_cont=".video-container";
    var back_cont=".vid_frame";
    var v_height=$(window).width() * 0.25;
    var v_width=$(window).width() * 0.5;
  $(v_cont).css({"height": v_height, 'width': v_width});
  $(back_cont).css({'width': ($(window).width() * 0.51)});
    }
if($(window).width() > 768 && $(window).width() < 1025) {
    var v_cont=".video-container";
    var back_cont=".vid_frame";
    var v_height=$(window).width() * 0.2;
    var v_width=$(window).width() * 0.4;
  $(v_cont).css({"height": v_height, 'width': v_width});
  $(back_cont).css({'width': ($(window).width() * 0.41)});
}

if($(window).width() > 1024 && $(window).width() < 1281) {
    var v_cont=".video-container";
    var back_cont=".vid_frame";
    var v_height=$(window).width() * 0.18;
    var v_width=$(window).width() * 0.36;
  $(v_cont).css({"height": v_height, 'width': v_width});
  $(back_cont).css({'width': ($(window).width() * 0.35)});
}
if($(window).width() > 1280 && $(window).width() < 1600) {
    var v_cont=".video-container";
    var back_cont=".vid_frame";
    var v_height=$(window).width() * 0.16;
    var v_width=$(window).width() * 0.32;
  $(v_cont).css({"height": v_height, 'width': v_width});
  $(back_cont).css({'width': ($(window).width() * 0.33)});
}
if($(window).width() > 1601) {
    var v_cont=".video-container";
    var back_cont=".vid_frame";
    var v_height=$(window).width() * 0.15;
    var v_width=$(window).width() * 0.30;
  $(v_cont).css({"height": v_height, 'width': v_width});
  $(back_cont).css({'width': ($(window).width() * 0.31)});
            }
        $(window).resize();
});
    },20);
});
