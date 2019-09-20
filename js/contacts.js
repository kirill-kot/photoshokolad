
$(document).ready(function init() {
    // выходим, если функция уже выполнялась
    if (arguments.callee.done) return;

    // устанавливаем флаг, чтобы функция не исполнялась дважды
    arguments.callee.done = true;

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

/* для Mozilla/Firefox/Opera 9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
}

/* для Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=\"__ie_onload\" defer=\"defer\" src=\"javascript:void(0)\"><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
    if (this.readyState == "complete") {
    init(); // вызываем обработчик для onload
    }
};
/*@end @*/

/* для Safari */
if (/WebKit/i.test(navigator.userAgent)) { // условие для Safari
    var _timer = setInterval(function() {
    if (/loaded|complete/.test(document.readyState)) {
        clearInterval(_timer);
        init(); // вызываем обработчик для onload
    }
    }, 10);
}

/* для остальных браузеров */
window.onload = init;

});
