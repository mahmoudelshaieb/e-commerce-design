$(document).ready(function () {
    'use strict';

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


    $('.owl-carousel').owlCarousel({
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



    // zoom product images
    $('.image-zoom')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom({
            url: $(this).find('img').attr('data-zoom')
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
    if(product_d_qty===0) {
        $('.qty .minus').attr('disabled', true);
    }

    $('.qty .plus').on('click', function() {
        product_d_qty +=1;
        $('.qty input').attr('value', product_d_qty);
        if(product_d_qty<=0) {
            $('.qty .minus').attr('disabled', true);
        }else {
            $('.qty .minus').attr('disabled', false);
        }
    })
    $('.qty .minus').on('click', function() {
        product_d_qty -=1;
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

});