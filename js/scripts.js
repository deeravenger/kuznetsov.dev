$(function () {
    "use strict";
    /*===============================================
      Happy face
    ===============================================*/
    function showHappyFace() {
        $('.avatar').find('img').attr('src', 'images/happy.jpg');
        setTimeout(function () {
            $('.avatar').find('img').attr('src', 'images/normal.jpg');
        }, 400);
        setTimeout(showHappyFace, getRandomInt(5000, 15000));
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    setTimeout(showHappyFace, 1000);

    /*===============================================
      Preloader
    ===============================================*/
    $(window).load(function () {
        $("body").addClass("loaded");
    });

    /*===============================================
      Smooth Scrolling
    ===============================================*/
    var htmlBody = $("html,body");

    $(".menu li a, .scroll-down-btn").on("click", function (e) {
        htmlBody.animate({scrollTop: $(this.hash).offset().top}, 800, "easeInOutQuart");
        e.preventDefault();
    });

    /*===============================================
      Scroll Spy
    ===============================================*/
    $('body').scrollspy({
        target: '.menu'
    });

    /*===============================================
      Toggle Menu
    ===============================================*/
    var menu = $(".menu");
    var menu1 = $(".menu-style-1 .menu");
    var menu2 = $(".menu-style-2 .menu");
    var menu3 = $(".menu-style-3 .menu");
    var toggleBtn = $(".toggle-btn");
    var toggleBtn1 = $(".menu-style-1 .toggle-btn");
    var toggleBtn2 = $(".menu-style-2 .toggle-btn");
    var toggleBtn3 = $(".menu-style-3 .toggle-btn");
    var windowWidth = $(window).width();

    toggleBtn.on("click", function (e) {
        if (menu.hasClass("show-menu")) {
            menu.removeClass("show-menu");
        } else {
            menu.addClass("show-menu");
        }
        e.stopPropagation();
    });

    // Navicon transform into X //
    toggleBtn.on("click", function () {
        if (toggleBtn.hasClass("toggle-close")) {
            toggleBtn.removeClass("toggle-close");
        } else {
            toggleBtn.addClass("toggle-close");
        }
    });

    // Close Menu for Menu Style 1
    $(document).on("click", function () {
        if (menu1.hasClass("show-menu")) {
            menu1.removeClass("show-menu");
        }
        if (toggleBtn1.hasClass("toggle-close")) {
            toggleBtn1.removeClass("toggle-close");
        }
    });

    // Close Menu for Menu Style 2
    if (windowWidth <= 767) {
        $(document).on("click", function () {
            if (menu2.hasClass("show-menu")) {
                menu2.removeClass("show-menu");
            }
            if (toggleBtn2.hasClass("toggle-close")) {
                toggleBtn2.removeClass("toggle-close");
            }
        });
    }

    // Close Menu for Menu Style 3
    if (windowWidth <= 767) {
        $(document).on("click", function () {
            if (menu3.hasClass("show-menu")) {
                menu3.removeClass("show-menu");
            }
            if (toggleBtn3.hasClass("toggle-close")) {
                toggleBtn3.removeClass("toggle-close");
            }
        });
    }

    /*===============================================
      Scroll to Top
    ===============================================*/
    var go_top = ".go-top";

    // hide or show button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) { // 700px from top
            $(go_top).addClass("go-top-visible");
        } else {
            $(go_top).removeClass("go-top-visible");
        }
    });

    // smooth scroll to top
    $(go_top).on("click", function () {
        htmlBody.animate({scrollTop: 0}, 800, "easeOutQuart");
        return false;
    });

    /*===============================================
      MixItUp
    ===============================================*/
    $('#mix-container').mixItUp();

    /*===============================================
      Magnific Popup
    ===============================================*/
    // $('.lightbox').magnificPopup({
    //     type: 'inline',
    //     fixedContentPos: false,
    //     removalDelay: 100,
    //     closeBtnInside: true,
    //     preloader: false,
    //     mainClass: 'mfp-fade'
    // });

    /*===============================================
      Counter
    ===============================================*/
    // $(".facts-background").appear(function () {
    //     $('.counter').each(function () {
    //         $(this).prop('Counter', 0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 4000,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    // }, {accX: 0, accY: -10});

    /*===============================================
      Owl Carousel
    ===============================================*/
    // $("#testimonialSlider").owlCarousel({
    //     items: 1,
    //     rewind: true,
    //     margin: 30,
    //     dots: true,
    //     dotsSpeed: 500,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     autoplayTimeout: 4000, // 4 seconds
    //     autoplaySpeed: 500 // 0.5 seconds
    // });
    //
    // // Blog Slider
    // $("#blogSlider").owlCarousel({
    //     items: 3,
    //     rewind: true,
    //     margin: 30,
    //     dots: false,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     autoplayTimeout: 4000, // 4 seconds
    //     autoplaySpeed: 500, // 0.5 seconds
    //     responsive: {
    //         // breakpoint from 0 up
    //         0: {
    //             items: 1
    //         },
    //         // breakpoint from 768 up
    //         768: {
    //             items: 2,
    //             stagePadding: 15
    //         },
    //         // breakpoint from 960 up
    //         960: {
    //             items: 3,
    //             stagePadding: 15
    //         }
    //     }
    // });

    // Custom Navigation of Resume
    var resumeNavigation = $("#blogSlider");
    // Events
    $("#next").on("click", function () {
        resumeNavigation.trigger('next.owl.carousel', [500]);
    })
    $("#prev").on("click", function () {
        resumeNavigation.trigger('prev.owl.carousel', [500]);
    })
    // end Custom Navigation of Resume

});
