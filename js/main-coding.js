$(document).ready(function () {
    'use strict';

    // set primary nav fixed when scroll
    $(window).scroll(function() {
        if($(window).scrollTop() > 16) {
            $('#primary-nav').addClass('position-fixed w-100');
            $('#primary-nav').css({
                'z-index': '101',
                'top': 0
            })
            $('.menu-control > a span').css({
                'padding-top': '1rem',
                'padding-bottom': '1.2rem',
                'border-radius': '6px'
            })
        }else {
            $('#primary-nav').removeClass('position-fixed w-100');
            $('.menu-control > a span').css({
                'padding-top': '0.94rem',
                'padding-bottom': '1rem',
                'border-radius': '0'
            })
        }
    })
    // set primary nav fixed when scroll

    // scroll to top
    var toTop = $('.scroll-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            if (toTop.is(':hidden')) {
                toTop.fadeIn(500);
            }
        }else {
            toTop.fadeOut(500);
        }
    });

    toTop.click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
    // scroll to top

    // var url = new URL(window.location.href);
    // var page = url.searchParams.get('page');

    // if(page === 'home') {
    //     $('#home').addClass('active').siblings('li').removeClass('active');
    // }else if(page === 'about') {
    //     $('#about').addClass('active').siblings('li').removeClass('active');
    // }else if(page === 'contact') {
    //     $('#contact').addClass('active').siblings('li').removeClass('active');
    // }else if(page === 'services') {
    //     $('#services').addClass('active').siblings('li').removeClass('active');
    // }else if(page === 'gallery') {
    //     $('#gallery').addClass('active').siblings('li').removeClass('active');
    // }

    //     var displayedData;

    // //list dynamic items 
    // function listItems(data) {
    //     $('.owl-carousel').loadTemplate("offers.html", data, {
    //         success: $('.alert-success').delay(400).show(300, function() {
    //             $(this).delay(2000).hide(300);
    //         }),
    //     });
    // }

    // // load offers
    // $.getJSON("js/data.json").done(function(data) {
    //     displayedData = data
    //     listItems(displayedData);
    // })

    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            easing: "swing",
            smoothHeight: true,
            slideshow: true,
            slideshowSpeed: 2000,
            animationSpeed: 600,
            useCSS: true,
            touch: true,
            // controlsContainer: $(".custom-controls-container"),
            customDirectionNav: $(".custom-navigation a")
        });
    });


    $('#login').on('click', function() {
        $(this).addClass('active');
        $('#register').removeClass('active');
        $('#login-c').show();
        $('#register-c').hide();
    })
    $('#register').on('click', function() {
        $(this).addClass('active');
        $('#login').removeClass('active');
        $('#login-c').hide();
        $('#register-c').show();
    })
    
    // top-nav overlay
    $('.top-cat .list-group-item:not(.active)').hover(
        function() {
            $('.top-nav-overlay').show()
        },  function() {
            $('.top-nav-overlay').hide()
        }
    );
    // top-nav overlay

    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })

    $('#about').click(function() {
        $('#about-c').show();
        $('#sitemap-c').hide();
        $('#r-policy-c').hide();
        $('#s-policy-c').hide();
        $('#p-policy-c').hide();
    })
    $('#sitemap').click(function() {
        $('#about-c').hide();
        $('#sitemap-c').show();
        $('#r-policy-c').hide();
        $('#s-policy-c').hide();
        $('#p-policy-c').hide();
    })
    $('#r-policy').click(function() {
        $('#about-c').hide();
        $('#sitemap-c').hide();
        $('#r-policy-c').show();
        $('#s-policy-c').hide();
        $('#p-policy-c').hide();
    })
    $('#s-policy').click(function() {
        $('#about-c').hide();
        $('#sitemap-c').hide();
        $('#r-policy-c').hide();
        $('#s-policy-c').show();
        $('#p-policy-c').hide();
    })
    $('#p-policy').click(function() {
        $('#about-c').hide();
        $('#sitemap-c').hide();
        $('#r-policy-c').hide();
        $('#s-policy-c').hide();
        $('#p-policy-c').show();
    })

    $('.about a').on('click', function(e) {
        e.preventDefault();
    })

    //switch between product images
    $('.thumb-nails ul li').on('click', function() {
        $('.image-product img').attr('src', $(this).data('image'));
        $('.image-product img').attr('data-zoom', $(this).data('image'));
    });

    

    // active size in action
    $('.select-style-sizes li').on('click', function() {
        $(this).addClass('size-selected').siblings('li').removeClass('size-selected')
    })
    // active size in action

    // active color in action
    $('.select-style-colors li').on('click', function() {
        $(this).addClass('color-selected').siblings('li').removeClass('color-selected')
    })
    // active color in action

    // Make Steppers Control in action
    var product_d_qty = 0;
    var unitPrice = 1459;
    var total;
    var subtotal;
    if(product_d_qty===0) {
        $('.qty .minus').attr('disabled', true);
    }

    $('.qty .plus').on('click', function() {
        product_d_qty +=1;
        total = unitPrice * product_d_qty;
        $('.total span').html(total)
        subtotal = total;
        $('.subtotal span').html(subtotal)
        $('.qty input').attr('value', product_d_qty);
        if(product_d_qty<=0) {
            $('.qty .minus').attr('disabled', true);
        }else {
            $('.qty .minus').attr('disabled', false);
        }
    })
    $('.qty .minus').on('click', function() {
        product_d_qty -=1;
        total = unitPrice * product_d_qty;
        $('.total span').html(total)
        subtotal = total;
        $('.subtotal span').html(subtotal)
        $('.qty input').attr('value', product_d_qty);
        if(product_d_qty<=0) {
            $(this).attr('disabled', true);
        }else {
            $(this).attr('disabled', false);
        }
    })
    // Make Steppers Control in action

    // switch between details
    $('#more-d').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#more-d-c').fadeIn();
        $('#spec-c').fadeOut();
        $('#review-c').fadeOut();
    })
    $('#spec').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#more-d-c').fadeOut();
        $('#spec-c').fadeIn();
        $('#review-c').fadeOut();
    })
    $('#review').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active')
        $('#more-d-c').fadeOut();
        $('#spec-c').fadeOut();
        $('#review-c').fadeIn();
    })
    // switch between details

    // make review
    $('.review .one').on('click', function() {
        $(this).removeClass('opacity-normal');
        $('.review .two').addClass('opacity-normal');
        $('.review .three').addClass('opacity-normal');
        $('.review .four').addClass('opacity-normal');
        $('.review .five').addClass('opacity-normal');

        $('.review .one i:nth-child(1)').addClass('text-warning');
        $('.review .two i:nth-child(1), .review .two i:nth-child(2)').removeClass('text-warning');
        $('.review .three i:nth-child(1), .review .three i:nth-child(2), .review .three i:nth-child(3)').removeClass('text-warning');
        $('.review .four i:nth-child(1), .review .four i:nth-child(2), .review .four i:nth-child(3), .review .four i:nth-child(4)').removeClass('text-warning');
        $('.review .five i:nth-child(1), .review .five i:nth-child(2), .review .five i:nth-child(3), .review .five i:nth-child(4), .review .five i:nth-child(5)').removeClass('text-warning');
    })
    $('.review .two').on('click', function() {
        $(this).removeClass('opacity-normal');
        $('.review .one').addClass('opacity-normal');
        $('.review .three').addClass('opacity-normal');
        $('.review .four').addClass('opacity-normal');
        $('.review .five').addClass('opacity-normal');

        $('.review .one i:nth-child(1)').removeClass('text-warning');
        $('.review .two i:nth-child(1), .review .two i:nth-child(2)').addClass('text-warning');
        $('.review .three i:nth-child(1), .review .three i:nth-child(2), .review .three i:nth-child(3)').removeClass('text-warning');
        $('.review .four i:nth-child(1), .review .four i:nth-child(2), .review .four i:nth-child(3), .review .four i:nth-child(4)').removeClass('text-warning');
        $('.review .five i:nth-child(1), .review .five i:nth-child(2), .review .five i:nth-child(3), .review .five i:nth-child(4), .review .five i:nth-child(5)').removeClass('text-warning');
    })
    $('.review .three').on('click', function() {
        $(this).removeClass('opacity-normal');
        $('.review .two').addClass('opacity-normal');
        $('.review .one').addClass('opacity-normal');
        $('.review .four').addClass('opacity-normal');
        $('.review .five').addClass('opacity-normal');

        $('.review .one i:nth-child(1)').removeClass('text-warning');
        $('.review .two i:nth-child(1), .review .two i:nth-child(2)').removeClass('text-warning');
        $('.review .three i:nth-child(1), .review .three i:nth-child(2), .review .three i:nth-child(3)').addClass('text-warning');
        $('.review .four i:nth-child(1), .review .four i:nth-child(2), .review .four i:nth-child(3), .review .four i:nth-child(4)').removeClass('text-warning');
        $('.review .five i:nth-child(1), .review .five i:nth-child(2), .review .five i:nth-child(3), .review .five i:nth-child(4), .review .five i:nth-child(5)').removeClass('text-warning');
    })
    $('.review .four').on('click', function() {
        $(this).removeClass('opacity-normal');
        $('.review .two').addClass('opacity-normal');
        $('.review .three').addClass('opacity-normal');
        $('.review .one').addClass('opacity-normal');
        $('.review .five').addClass('opacity-normal');

        $('.review .one i:nth-child(1)').removeClass('text-warning');
        $('.review .two i:nth-child(1), .review .two i:nth-child(2)').removeClass('text-warning');
        $('.review .three i:nth-child(1), .review .three i:nth-child(2), .review .three i:nth-child(3)').removeClass('text-warning');
        $('.review .four i:nth-child(1), .review .four i:nth-child(2), .review .four i:nth-child(3), .review .four i:nth-child(4)').addClass('text-warning');
        $('.review .five i:nth-child(1), .review .five i:nth-child(2), .review .five i:nth-child(3), .review .five i:nth-child(4), .review .five i:nth-child(5)').removeClass('text-warning');
    })
    $('.review .five').on('click', function() {
        $(this).removeClass('opacity-normal');
        $('.review .two').addClass('opacity-normal');
        $('.review .three').addClass('opacity-normal');
        $('.review .four').addClass('opacity-normal');
        $('.review .one').addClass('opacity-normal');

        $('.review .one i:nth-child(1)').removeClass('text-warning');
        $('.review .two i:nth-child(1), .review .two i:nth-child(2)').removeClass('text-warning');
        $('.review .three i:nth-child(1), .review .three i:nth-child(2), .review .three i:nth-child(3)').removeClass('text-warning');
        $('.review .four i:nth-child(1), .review .four i:nth-child(2), .review .four i:nth-child(3), .review .four i:nth-child(4)').removeClass('text-warning');
        $('.review .five i:nth-child(1), .review .five i:nth-child(2), .review .five i:nth-child(3), .review .five i:nth-child(4), .review .five i:nth-child(5)').addClass('text-warning');
    })
    // make review

    // make angle for arrow
    // if($('.accordion .card-header button').hasClass('collapsed')) {
    //     $('.accordion .card-header button i').animate({
    //         'transform': 'rotateZ(0deg)'
    //     })
    // }else {
    //     $('.accordion .card-header button i').animate({
    //         'transform': 'rotateZ(90deg)'
    //     })
    // }

    $('.accordion .card-header button').on('click', function() {
        if($(this).hasClass('collapsed')) {
            $(this).next('i').css({
                transform: 'rotateZ(90deg)'
            })
        }else {
            $(this).next('i').css({
                transform: 'rotateZ(0deg)'
            })
        }
    })
    // make angle for arrow

    // list and grid view handler
    $('.list-view-handler').on('click', function() {
        $(this).addClass('g-l-view-active').siblings('button').removeClass('g-l-view-active')
        $('.product-list > div').removeClass('col-sm-12 col-md-6 col-lg-3 col-xl-3')
        .addClass('col-sm-12 col-md-12 col-lg-12 col-xl-12');
        $('.product-list .card').addClass('d-flex flex-row')
        $('.product-list #list-img').addClass('list-img');
        $('.product-list #list-body button').removeClass('btn-block').addClass('mx-3');

    })
    $('.grid-view-handler').on('click', function() {
        $(this).addClass('g-l-view-active').siblings('button').removeClass('g-l-view-active')
        $('.product-list > div').removeClass('col-sm-12 col-md-12 col-lg-12 col-xl-12')
        .addClass('col-sm-12 col-md-6 col-lg-3 col-xl-3');
        $('.product-list .card').removeClass('d-flex flex-row')
        $('.product-list #list-img').removeClass('list-img');
        $('.product-list #list-body button').addClass('btn-block').removeClass('mx-3');

    })
    // list and grid view handler

    // zoom product images
    $('.image-zoom')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom({
            url: $(this).find('img').attr('data-zoom')
        });



});