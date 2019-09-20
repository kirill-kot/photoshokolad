(function($) {
    $(document).on('ready',function(){
        $('nav').removeClass("yellow_header").addClass("transparent");
                $('#be_dashed').removeClass("nav-wrapper_yellow").addClass("nav-wrapper");
                $('header .brand-logo').css({
                        "margin": "0.75rem"
                    });
                $('header nav li a').css({
                    "height": "105px",
                    "line-height": "105px"
                });
                $('header .dropdown-content li a').css({
                    "height": "105px",
                    "line-height": "105px"
                }); //высота списка выпадающего меню
                $('header .nav-phone').css({
                    "height": "105px",
                    "line-height": "105px"
                });
                $('header .nav-button').css({
                    "height": "105px",
                    "line-height": "105px"
                });
    });
    $(function() {
        $('.parallax').parallax();
        //      парралакс эффект картинки
        //      выпадающее меню
        $('.button-collapse').sideNav({
            menuWidth: 240, // ширина мобильного меню
            edge: 'left', // сторона меню
            //      closeOnClick: true // закрывается по клику в пустое поле
        });
        $(".dropdown-button").dropdown(); //      выпадающее меню для десктопа

        //      боковая навигация панели
        var swiper1 = new Swiper('.swiper1', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            spaceBetween: 0
        });
        var swiper2 = new Swiper('.swiper2', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            spaceBetween: 0
        });
        var swiper3 = new Swiper('.swiper3', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: 0
        });
        var testemonials = new Swiper('.swiper4', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 3,
            autoplay: 6000,
            autoplayDisableOnInteraction: true,
            speed: 1000
        });
        var swiper_services = new Swiper('.swiper_services', {
            slidesPerView: 3,
            spaceBetween: 0,
            breakpoints: {
    // when window width is <= 320px
    0: {
      slidesPerView: 1
    },
    320: {
      slidesPerView: 1
    },
                480: {
      slidesPerView: 1
    },
                768: {
      slidesPerView: 1
    },
    // when window width is <= 640px
    992: {
      slidesPerView: 3
    }
  }
        });
        var swiper_workers = new Swiper('.swiper_workers', {
            slidesPerView: 3,
            spaceBetween: 0,
            breakpoints: {
    // when window width is <= 320px
    0: {
      slidesPerView: 1
    },
    320: {
      slidesPerView: 1
    },
                480: {
      slidesPerView: 1
    },
                768: {
      slidesPerView: 1
    },
    // when window width is <= 640px
    992: {
      slidesPerView: 3
    }
  }
        });

//        галерея в модальном блоке

    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
    });
//        галерея значиков в модальном окне
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        mousewheelControl: true,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
//        модальное окно

  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .9, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {
      galleryTop.update();
      }, // Callback for Modal open
    }
  );
$('#modal_gallery .close').on('mouseenter', function(){
    $('#modal_gallery .close').css({'border': '1px solid #dcd256'});
    $('.close span').css({'background-color':'#dcd256'});
});
        $('#modal_gallery .close').on('mouseleave', function(){
    $('#modal_gallery .close').css({'border': '1px solid #fff'});
    $('.close span').css({'background-color':'#fff'});
});
        //колдунство с шапкой
        $("nav").addClass("transparent"); // добавили класс с прозрачным бэком
        $(window).scroll(function() {
            // головняк с логотипом
            if ($(window).width() > 0 && $(window).width() < 320) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.4rem 0"
                    }); //отступы логотипа
                    $('header .links-img.button-collapse').css({
                        "margin": "2.4rem 1rem"
                    });
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.5rem 0"
                    });
                    $('header .links-img.button-collapse').css({
                        "margin": "2.5rem 1rem"
                    }); //отступ кнопки меню
                }
            }
            if ($(window).width() > 321) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.3rem 0"
                    }); //отступы логотипа
                    $('header .links-img.button-collapse').css({
                        "margin": "2.25rem 1rem"
                    });
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.5rem 0"
                    });
                    $('header .links-img.button-collapse').css({
                        "margin": "2.5rem 1rem"
                    }); //отступ кнопки меню
                }
            }
            if ($(window).width() > 481) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.3rem 0"
                    }); //отступы логотипа
                    $('header .links-img.button-collapse').css({
                        "margin": "1.75rem 1rem"
                    });
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.5rem 0"
                    });
                    $('header .links-img.button-collapse').css({
                        "margin": "2.5rem 1rem"
                    }); //отступ кнопки меню
                }
            }
            if ($(window).width() > 769) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.3rem 0"
                    }); //отступы логотипа
                    $('header .links-img.button-collapse').css({
                        "margin": "1.75rem 1rem"
                    });
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.5rem 0"
                    });
                    $('header .links-img.button-collapse').css({
                        "margin": "2.5rem 1rem"
                    }); //отступ кнопки меню
                }
            }
            if ($(window).width() > 992) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.5rem 1rem"
                    }); //отступы логотипа
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.75rem 1rem"
                    });
                }
            }
            if ($(window).width() > 1024) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.6rem 0.75rem"
                    }); //отступы логотипа
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.75rem"
                    });
                }
            }
            if ($(window).width() > 1280) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.25rem 1rem"
                    }); //отступы логотипа
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.5rem 1rem"
                    });
                }
            }
            if ($(window).width() > 1600) {
                if ($(this).scrollTop() > 100) {
                    $('header .brand-logo').css({
                        "margin": "0.25rem 1rem"
                    }); //отступы логотипа
                } else {
                    $('header .brand-logo').css({
                        "margin": "0.5rem 1rem"
                    });
                }
            }
            //заголовок
            if ($(this).scrollTop() > 100) {
                $('nav').removeClass("transparent").addClass("yellow_header"); //замена классов
                $('#be_dashed').removeClass("nav-wrapper").addClass("nav-wrapper_yellow"); //классы внутреннего враппера навбара
                $('header nav li a').css({
                    "height": "95px",
                    "line-height": "105px"
                }); //высота списка ссылок
                $('header .dropdown-content li a').css({
                    "height": "95px",
                    "line-height": "95px"
                }); //высота списка выпадающего меню
                $('header .nav-phone').css({
                    "height": "95px",
                    "line-height": "105px"
                }); //высота правых блоков
                $('header .nav-button').css({
                    "height": "95px",
                    "line-height": "105px"
                });
            } else {
                $('nav').removeClass("yellow_header").addClass("transparent");
                $('#be_dashed').removeClass("nav-wrapper_yellow").addClass("nav-wrapper");
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
            }
        });
        $('a.links_img').click(function() {
            $('html, body').animate({
                scrollTop: $('#target').offset().top
            }, 1000);
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
