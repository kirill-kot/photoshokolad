jQuery(document).ready(function($){
                $('header .brand-logo').css({
                        "margin": "0.5rem"
                    });
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
            edge: 'left', // сторона меню
            //      closeOnClick: true // закрывается по клику в пустое поле
        });
        $(".dropdown-button").dropdown(); //      выпадающее меню для десктопа
//слайдер для альбома 3 разворота

    var galleryTop_3 = new Swiper('.gallery-top-3', {
        nextButton: '.swiper-next-3',
        prevButton: '.swiper-prev-3',
        spaceBetween: 10,
        centeredSlider: true
    });
    var galleryThumbs_3 = new Swiper('.gallery-thumbs-3', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop_3.params.control = galleryThumbs_3;
    galleryThumbs_3.params.control = galleryTop_3;

    var album3modal = new Swiper('.album_3_swiper', {
        nextButton: '.swiper-album-3-next',
        prevButton: '.swiper-album-3-prev',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });
    //слайдер для альбома 5 разворотов

    var galleryTop_5 = new Swiper('.gallery-top-5', {
        nextButton: '.swiper-next-5',
        prevButton: '.swiper-prev-5',
        spaceBetween: 10,
        centeredSlider: true
    });
    var galleryThumbs_5 = new Swiper('.gallery-thumbs-5', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop_5.params.control = galleryThumbs_5;
    galleryThumbs_5.params.control = galleryTop_5;

    var album5modal = new Swiper('.album_5_swiper', {
        nextButton: '.swiper-album-5-next',
        prevButton: '.swiper-album-5-prev',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

//    кнопка закрытия модального слайдера 3 разворота
$('#album_3_modal .close').on('mouseenter', function(){
    $('#album_3_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#album_3_modal .close').on('mouseleave', function(){
    $('#album_3_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});
    //    кнопка закрытия модального слайдера  5 разворотов
$('#album_5_modal .close').on('mouseenter', function(){
    $('#album_5_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#album_5_modal .close').on('mouseleave', function(){
    $('#album_5_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

//    страница продуктов
//    слайдеры
        var gallery_albums = new Swiper('.gallery-albums', {
        nextButton: '.swiper-next-albums',
        prevButton: '.swiper-prev-albums',
        spaceBetween: 10,
        centeredSlider: true
    });
    var galleryThumbs_album = new Swiper('.gallery-thumbs-album', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    gallery_albums.params.control = galleryThumbs_album;
    galleryThumbs_album.params.control = gallery_albums;

    var album_modal = new Swiper('.album-modal', {
        nextButton: '.swiper-album-next-modal',
        prevButton: '.swiper-album-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#album_modal .close').on('mouseenter', function(){
    $('#album_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#album_modal .close').on('mouseleave', function(){
    $('#album_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var photo_modal = new Swiper('.photo-modal', {
        nextButton: '.swiper-photo-next-modal',
        prevButton: '.swiper-photo-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#photo_modal .close').on('mouseenter', function(){
    $('#photo_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#photo_modal .close').on('mouseleave', function(){
    $('#photo_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});


var photo_pack_modal = new Swiper('.photo-pack-modal', {
        nextButton: '.swiper-photo-pack-next-modal',
        prevButton: '.swiper-photo-pack-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#photo_pack_modal .close').on('mouseenter', function(){
    $('#photo_pack_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#photo_pack_modal .close').on('mouseleave', function(){
    $('#photo_pack_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var cd_modal = new Swiper('.cd-modal', {
        nextButton: '.swiper-cd-next-modal',
        prevButton: '.swiper-cd-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#cd_modal .close').on('mouseenter', function(){
    $('#cd_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#cd_modal .close').on('mouseleave', function(){
    $('#cd_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var acryl_modal = new Swiper('.acryl-modal', {
        nextButton: '.swiper-acryl-next-modal',
        prevButton: '.swiper-acryl-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#acryl_modal .close').on('mouseenter', function(){
    $('#acryl_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#acryl_modal .close').on('mouseleave', function(){
    $('#acryl_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var magnet_modal = new Swiper('.magnet-modal', {
        nextButton: '.swiper-magnet-next-modal',
        prevButton: '.swiper-magnet-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#magnet_modal .close').on('mouseenter', function(){
    $('#magnet_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#magnet_modal .close').on('mouseleave', function(){
    $('#magnet_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var crystal_modal = new Swiper('.crystal-modal', {
        nextButton: '.swiper-crystal-next-modal',
        prevButton: '.swiper-crystal-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#crystal_modal .close').on('mouseenter', function(){
    $('#crystal_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#crystal_modal .close').on('mouseleave', function(){
    $('#crystal_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var paint_modal = new Swiper('.paint-modal', {
        nextButton: '.swiper-paint-next-modal',
        prevButton: '.swiper-paint-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#paint_modal .close').on('mouseenter', function(){
    $('#paint_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#paint_modal .close').on('mouseleave', function(){
    $('#paint_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var rock_modal = new Swiper('.rock-modal', {
        nextButton: '.swiper-rock-next-modal',
        prevButton: '.swiper-rock-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#rock_modal .close').on('mouseenter', function(){
    $('#rock_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#rock_modal .close').on('mouseleave', function(){
    $('#rock_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var puzzle_modal = new Swiper('.puzzle-modal', {
        nextButton: '.swiper-puzzle-next-modal',
        prevButton: '.swiper-puzzle-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#puzzle_modal .close').on('mouseenter', function(){
    $('#puzzle_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#puzzle_modal .close').on('mouseleave', function(){
    $('#puzzle_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var pocket_calendar_modal = new Swiper('.pocket-calendar-modal', {
        nextButton: '.swiper-pocket-calendar-next-modal',
        prevButton: '.swiper-pocket-calendar-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#pocket_calendar_modal .close').on('mouseenter', function(){
    $('#pocket_calendar_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#pocket_calendar_modal .close').on('mouseleave', function(){
    $('#pocket_calendar_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var desk_calendar_modal = new Swiper('.desk-calendar-modal', {
        nextButton: '.swiper-desk-calendar-next-modal',
        prevButton: '.swiper-desk-calendar-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#desk_calendar_modal .close').on('mouseenter', function(){
    $('#desk_calendar_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#desk_calendar_modal .close').on('mouseleave', function(){
    $('#desk_calendar_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var breloq_modal = new Swiper('.breloq-modal', {
        nextButton: '.swiper-breloq-next-modal',
        prevButton: '.swiper-breloq-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#breloq_modal .close').on('mouseenter', function(){
    $('#breloq_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#breloq_modal .close').on('mouseleave', function(){
    $('#breloq_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});
var toy_modal = new Swiper('.toy-modal', {
        nextButton: '.swiper-toy-next-modal',
        prevButton: '.swiper-toy-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#toy_modal .close').on('mouseenter', function(){
    $('#toy_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#toy_modal .close').on('mouseleave', function(){
    $('#toy_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var waterball_modal = new Swiper('.waterball-modal', {
        nextButton: '.swiper-waterball-next-modal',
        prevButton: '.swiper-waterball-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#waterball_modal .close').on('mouseenter', function(){
    $('#waterball_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#waterball_modal .close').on('mouseleave', function(){
    $('#waterball_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var wallclock_modal = new Swiper('.wallclock-modal', {
        nextButton: '.swiper-wallclock-next-modal',
        prevButton: '.swiper-wallclock-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#wallclock_modal .close').on('mouseenter', function(){
    $('#wallclock_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#wallclock_modal .close').on('mouseleave', function(){
    $('#wallclock_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});

var photoframe_modal = new Swiper('.photoframe-modal', {
        nextButton: '.swiper-photoframe-next-modal',
        prevButton: '.swiper-photoframe-prev-modal',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0
    });

    $('#photoframe_modal .close').on('mouseenter', function(){
    $('#photoframe_modal .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#photoframe_modal .close').on('mouseleave', function(){
    $('#photoframe_modal .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});


    //вызов всплывающего оверлея
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .9, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {
      album3modal.update();
      album5modal.update();
      album_modal.update();
      photo_modal.update();
      photo_pack_modal.update();
      cd_modal.update();
      acryl_modal.update();
      magnet_modal.update();
      crystal_modal.update();
      paint_modal.update();
      rock_modal.update();
      puzzle_modal.update();
      pocket_calendar_modal.update();
      desk_calendar_modal.update();
      breloq_modal.update();
      toy_modal.update();
      waterball_modal.update();
      wallclock_modal.update();
      photoframe_modal.update();
      }, // Callback for Modal open
    }
  );
});


