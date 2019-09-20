jQuery(document).ready(function($){

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
//    сама карта

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [55.586918,37.601663],
            zoom: 16
        });
        DG.marker([55.586918,37.601663]).addTo(map);
    });

//скрипт-авторесайзер карты
    var resizer2 = setTimeout(function(){
$(window).resize(function(){
   if($(window).width() > 0 && $(window).width() < 320) {
    var map_cont = "#map";
    var map_size = ".map_frame";
    var v_height = $(window).width() * 0.78;
    var v_width = $(window).width() * 0.9;
  $(map_cont).css({"height": v_height, 'width': v_width});
  $(map_size).css({'width': ($(window).width() * 0.905)});
   }
if($(window).width() > 320 && $(window).width() < 480) {
    var map_cont = "#map";
    var map_size = ".map_frame";
    var v_height = $(window).width() * 0.78;
    var v_width = $(window).width() * 0.9;
  $(map_cont).css({"height": v_height, 'width': v_width});
  $(map_size).css({'width': ($(window).width() * 0.905)});
   }
if($(window).width() > 480 && $(window).width() < 600) {
    var map_cont = "#map";
    var map_size = ".map_frame";
    var v_height = $(window).width() * 0.78;
    var v_width = $(window).width() * 0.9;
  $(map_cont).css({"height": v_height, 'width': v_width});
  $(map_size).css({'width': ($(window).width() * 0.905)});
   }
    if($(window).width() > 600 && $(window).width() < 1024) {
    var map_cont = "#map";
    var map_size = ".map_frame";
    var v_height = $(window).width() * 0.33;
    var v_width = $(window).width() * 0.8;
  $(map_cont).css({"height": v_height, 'width': v_width});
   }
    if($(window).width() > 1024) {
    var map_cont = "#map";
    var map_size = ".map_frame";
    var v_height = $(window).width() * 0.2675;
    var v_width = $(window).width() * .65;
  $(map_cont).css({"height": v_height, 'width': v_width});
   }

        $(window).resize();
});
    },20);
});
