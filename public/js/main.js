AOS.init({duration:800,easing:"slide",once:false});jQuery(document).ready(function(e){"use strict";var t=function(){e(".js-clone-nav").each(function(){var t=e(this);t.clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")});setTimeout(function(){var t=0;e(".site-mobile-menu .has-children").each(function(){var n=e(this);n.prepend('<span class="arrow-collapse collapsed">');n.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+t});n.find("> ul").attr({"class":"collapse",id:"collapseItem"+t});t++})},1e3);e("body").on("click",".arrow-collapse",function(t){var n=e(this);if(n.closest("li").find(".collapse").hasClass("show")){n.removeClass("active")}else{n.addClass("active")}t.preventDefault()});e(window).resize(function(){var t=e(this),n=t.width();if(n>768){if(e("body").hasClass("offcanvas-menu")){e("body").removeClass("offcanvas-menu")}}});e("body").on("click",".js-menu-toggle",function(t){var n=e(this);t.preventDefault();if(e("body").hasClass("offcanvas-menu")){e("body").removeClass("offcanvas-menu");n.removeClass("active")}else{e("body").addClass("offcanvas-menu");n.addClass("active")}});e(document).mouseup(function(t){var n=e(".site-mobile-menu");if(!n.is(t.target)&&n.has(t.target).length===0){if(e("body").hasClass("offcanvas-menu")){e("body").removeClass("offcanvas-menu")}}})};t();var n=function(){e(".js-btn-minus").on("click",function(t){t.preventDefault();if(e(this).closest(".input-group").find(".form-control").val()!=0){e(this).closest(".input-group").find(".form-control").val(parseInt(e(this).closest(".input-group").find(".form-control").val())-1)}else{e(this).closest(".input-group").find(".form-control").val(parseInt(0))}});e(".js-btn-plus").on("click",function(t){t.preventDefault();e(this).closest(".input-group").find(".form-control").val(parseInt(e(this).closest(".input-group").find(".form-control").val())+1)})};var r=function(){e("#slider-range").slider({range:true,min:0,max:500,values:[75,300],slide:function(t,n){e("#amount").val("$"+n.values[0]+" - $"+n.values[1])}});e("#amount").val("$"+e("#slider-range").slider("values",0)+" - $"+e("#slider-range").slider("values",1))};var i=function(){if(e(".nonloop-block-13").length>0){e(".nonloop-block-13").owlCarousel({center:false,items:1,loop:true,stagePadding:0,margin:20,smartSpeed:1e3,autoplay:true,nav:true,responsive:{600:{margin:20,nav:true,items:2},1e3:{margin:20,stagePadding:0,nav:true,items:2}}});e(".custom-next").click(function(t){t.preventDefault();e(".nonloop-block-13").trigger("next.owl.carousel")});e(".custom-prev").click(function(t){t.preventDefault();e(".nonloop-block-13").trigger("prev.owl.carousel")})}e(".slide-one-item").owlCarousel({center:false,items:1,loop:true,stagePadding:0,margin:0,smartSpeed:1500,autoplay:true,pauseOnHover:false,dots:true,nav:true,navText:['<span class="icon-keyboard_arrow_left">','<span class="icon-keyboard_arrow_right">']});if(e(".owl-all").length>0){e(".owl-all").owlCarousel({center:false,items:1,loop:false,stagePadding:0,margin:0,autoplay:false,nav:false,dots:true,touchDrag:true,mouseDrag:true,smartSpeed:1e3,navText:['<span class="icon-arrow_back">','<span class="icon-arrow_forward">'],responsive:{768:{margin:30,nav:false,responsiveRefreshRate:10,items:1},992:{margin:30,stagePadding:0,nav:false,responsiveRefreshRate:10,touchDrag:false,mouseDrag:false,items:3},1200:{margin:30,stagePadding:0,nav:false,responsiveRefreshRate:10,touchDrag:false,mouseDrag:false,items:3}}})}};i();var s=function(){e("#date-countdown").countdown("2020/10/10",function(t){var n=e(this).html(t.strftime(""+'<span class="countdown-block"><span class="label">%w</span> weeks </span>'+'<span class="countdown-block"><span class="label">%d</span> days </span>'+'<span class="countdown-block"><span class="label">%H</span> hr </span>'+'<span class="countdown-block"><span class="label">%M</span> min </span>'+'<span class="countdown-block"><span class="label">%S</span> sec</span>'))})};var o=function(){if(e(".datepicker").length>0){e(".datepicker").datepicker()}};o();var u=function(){e(".js-sticky-header").sticky({topSpacing:0})};u();var a=function(){var t=e(".site-menu-toggle");e("body").on("click",".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']",function(t){t.preventDefault();var n=this.hash;e("html, body").animate({scrollTop:e(n).offset().top-50},600,"easeInOutExpo",function(){})})};a();var f=function(){e(window).scroll(function(){var t=e(this).scrollTop();if(t>100){e(".js-sticky-header").addClass("shrink")}else{e(".js-sticky-header").removeClass("shrink")}})};f();var l=function(){e("#about-section").waypoint(function(t){if(t==="down"&&!e(this.element).hasClass("ftco-animated")){var n=e.animateNumber.numberStepFactories.separator(",");e(".number > span").each(function(){var t=e(this),r=t.data("number");t.animateNumber({number:r,numberStep:n},7e3)})}},{offset:"95%"})};l();e(".owl-carousel").owlCarousel()})