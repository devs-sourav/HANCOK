// $(".red_text").typeWrite({
//     repeat: true,
//     speed:0,
// 	interval: 1100,
//     cursor: false,
//     color:"#FF4655",
// })
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
})

var menu = $('.navbar').offset().top;
$(window).scroll(function () {
    var scroll = $(this).scrollTop();


    if (scroll > menu) {
        $('.navbar').addClass('menu_fix');
    } else {
        $('.navbar').removeClass('menu_fix');
    }
});



$('.btn_top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    }, 100);
});

$(window).scroll(function () {
    var aaa = $(this).scrollTop();

    if (aaa > 300) {
        $('.btn_top').fadeIn();
    } else {
        $('.btn_top').fadeOut();
    }
});



var typed = new Typed('.red2_text', {
    strings: ['ABOUT THE BIGGEST HANCOK COMMUNITY',
        'ABOUT THE BIGGEST HANCOK COMMUNITY'
    ],
    typeSpeed: 120,
    speed: 100,
    loop: true,
    showCursor: false,
    backSpeed: 20
});


var typed = new Typed('.red_text', {
    strings: ['GAmING EXPeRIENCE',
        'GAmING EXPeRIENCE'
    ],
    typeSpeed: 120,
    speed: 100,
    loop: true,
    showCursor: false,
    backSpeed: 20
});


var typed = new Typed('.red_text3', {
    strings: ['MOST POPULAR GAMING PLATFORM.',
        'MOST POPULAR GAMING PLATFORM.'
    ],
    typeSpeed: 120,
    speed: 100,
    loop: true,
    showCursor: false,
    backSpeed: 20
});


var typed = new Typed('.red_text4', {
    strings: ['LIVE STREAMIN VIDEO BY HANCOK',
        'LIVE STREAMIN VIDEO BY HANCOK'
    ],
    typeSpeed: 120,
    speed: 100,
    loop: true,
    showCursor: false,
    backSpeed: 20
});


var typed = new Typed('.red_text5', {
    strings: ['Choose Your Favourite Game',
        'Choose Your Favourite Game'
    ],
    typeSpeed: 120,
    speed: 100,
    loop: true,
    showCursor: false,
    backSpeed: 20
});


var typed = new Typed('.red_text6', {
    strings: ['WE PROVIDE ALL GAMING ACCESORIES',
        'WE PROVIDE ALL GAMING ACCESORIES'
    ],
    typeSpeed: 120,
    speed: 100,
    loop: true,
    showCursor: false,
    backSpeed: 20
});


var typed = new Typed('.red_text7', {
    strings: ['FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”',
        'FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”'
    ],
    typeSpeed: 120,
    speed: 100,
    loop: true,
    showCursor: false,
    backSpeed: 20
});


$(function () {

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });


    $('.slider_cont_pop_game').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        prevArrow: ".pop_prev",
        nextArrow: ".pop_next",


    });


    $('.stream_slider_item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '',
        nextArrow: '',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 1000,
                    autoplaySpeed: 1000,
                    centerMode: true,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 1000,
                    autoplaySpeed: 1000,
                    centerMode: true,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 1000,
                    autoplaySpeed: 1000,
                    centerMode: true,
                    centerPadding: '0px',
                }
            },
        ]

    });


    $('.sale_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        prevArrow: '',
        nextArrow: '',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 1000,
                }
            },
        ]
    });


    new VenoBox({
        selector: '.my-video-links',
    });


    Carousel.init($("#carousel"));
    $("#carousel").init();



    $('.store_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        prevArrow: ".store_prev",
        nextArrow: ".store_next",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    speed: 1000,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    speed: 1000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    speed: 1000,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    speed: 1000,
                }
            },
        ]
    });

    $('.show').on('click', function () {
        $('.sidebar').css('left', '0px')
    })
    
    $('.cross').on('click',function(){
        $('.sidebar').css('left','-100%')
    })

})