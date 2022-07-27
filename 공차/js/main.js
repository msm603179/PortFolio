$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        fade: true
    });
}); // index End



$(document).ready(function () {
    $('.face').mouseover(function () {
        $(this).attr('src', 'img/face_hover.png');
    })

    $('.insta').mouseover(function () {
        $(this).attr('src', 'img/insta_hover.png');
    })

    $('.kakao').mouseover(function () {
        $(this).attr('src', 'img/kakao_hover.png');
    })

    $('.face').mouseout(function () {
        $(this).attr('src', 'img/face.png');
    })

    $('.insta').mouseout(function () {
        $(this).attr('src', 'img/insta.png');
    })

    $('.kakao').mouseout(function () {
        $(this).attr('src', 'img/kakao.png');
    })

    $('.top_scroll').on('click', function () {
        $('html, body').animate({scrollTop: '0'}, 100);
    }); // common End

    $(".tea").on("click", function () {
        $(".tea_img").attr('src', 'img/tea.png');
        $(".milktea_img").attr('src', 'img/milkbl.png');
        $(".fruit_img").attr('src', 'img/fruitbl.png');
        $(".jewelry_img").attr('src', 'img/jewelrybl.png');

        $("#section02 .inner").css("height", "687px");

        $(".tea_list").fadeIn();
        $(".milktea_list").fadeOut();
        $(".fruitmix_list").fadeOut();
        $(".jewelry_list").fadeOut();
    });

    $(".milktea").on("click", function () {
        $(".tea_img").attr('src', 'img/teabl.png');
        $(".milktea_img").attr('src', 'img/milk.png');
        $(".fruit_img").attr('src', 'img/fruitbl.png');
        $(".jewelry_img").attr('src', 'img/jewelrybl.png');

        $("#section02 .inner").css("height", "1860px");

        $(".tea_list").fadeOut();
        $(".milktea_list").fadeIn();
        $(".fruitmix_list").fadeOut();
        $(".jewelry_list").fadeOut();
    });

    $(".fruitmix").on("click", function () {
        $(".tea_img").attr('src', 'img/teabl.png');
        $(".milktea_img").attr('src', 'img/milkbl.png');
        $(".fruit_img").attr('src', 'img/fruit.png');
        $(".jewelry_img").attr('src', 'img/jewelrybl.png');

        $("#section02 .inner").css("height", "1239px");

        $(".tea_list").fadeOut();
        $(".milktea_list").fadeOut();
        $(".fruitmix_list").fadeIn();
        $(".jewelry_list").fadeOut();
    });

    $(".jewelry").on("click", function () {
        $(".tea_img").attr('src', 'img/teabl.png');
        $(".milktea_img").attr('src', 'img/milkbl.png');
        $(".fruit_img").attr('src', 'img/fruitbl.png');
        $(".jewelry_img").attr('src', 'img/jewelry.png');

        $("#section02 .inner").css("height", "687px");

        $(".tea_list").fadeOut();
        $(".milktea_list").fadeOut();
        $(".fruitmix_list").fadeOut();
        $(".jewelry_list").fadeIn();
    }); // tea End

    $(".korea_icon").on("click", function () {
        $(".korea_detail").fadeIn();
    })

    $(".japan_icon").on("click", function () {
        $(".japan_detail").fadeIn();
    })

    $(".china_icon").on("click", function () {
        $(".china_detail").fadeIn();
    })

    $(".hongkong_icon").on("click", function () {
        $(".hongkong_detail").fadeIn();
    })

    $(".taiwan_icon").on("click", function () {
        $(".taiwan_detail").fadeIn();
    })

    $(".australia_icon").on("click", function () {
        $(".australia_detail").fadeIn();
    })

    $(".vietnam_icon").on("click", function () {
        $(".vietnam_detail").fadeIn();
    })

    $(".uk_icon").on("click", function () {
        $(".uk_detail").fadeIn();
    })

    $(".usa_icon").on("click", function () {
        $(".usa_detail").fadeIn();
    })

    $(".mexico_icon").on("click", function () {
        $(".mexico_detail").fadeIn();
    })

    $(".canada_icon").on("click", function () {
        $(".canada_detail").fadeIn();
    })

    $(".close").on("click", function () {
        $(".detail").fadeOut();
    }) // global End
});

$(document).on("scroll", function(e){//브라우저에서 마우스 스크롤 했을 때 이벤트

    let scrollTop = $(document).scrollTop();//변수명 scrollTop에 브라우저 스클로 값을 저장
    $("#scrollBox").text(scrollTop); // #scrollBox에게 text로 scrollTop 값 노출

    if (scrollTop >= 150 && scrollTop <= 1250) {
        $("#story .story_comment").addClass("on");
    } else if(scrollTop >= 100 || scrollTop >= 1300) {
        $("#story .story_comment").removeClass("on");
    }

    if (scrollTop >= 700 && scrollTop <=1850 ) {
        $(".brand_leftbox .border").addClass("on");
        $(".brand_leftbox span").addClass("on");
        $(".brand_lefth3 h3").addClass("on");        
        $(".brand_leftcomment strong").addClass("on");
        $(".brand_leftcomment p").addClass("on");
        $(".brand_leftcomment a").addClass("on");
    } else if(scrollTop <= 310 || scrollTop >= 1900) {
        $(".brand_leftbox .border").removeClass("on");
        $(".brand_leftbox span").removeClass("on");
        $(".brand_lefth3 h3").removeClass("on");
        $(".brand_leftcomment strong").removeClass("on");
        $(".brand_leftcomment p").removeClass("on");
        $(".brand_leftcomment a").removeClass("on");
    }

    if(scrollTop >= 1400 && scrollTop <= 2650) {
        $(".ph_rightbox .border").addClass("on");
        $(".ph_rightbox .img").addClass("on");
        $(".ph_righth3 h3").addClass("on");
        $(".ph_rightcomment strong").addClass("on");
        $(".ph_rightcomment p").addClass("on");
        $(".ph_rightcomment a").addClass("on");
    }else if(scrollTop <= 1000 || scrollTop >= 2700){
        $(".ph_rightbox .img").removeClass("on");
        $(".ph_rightbox .border").removeClass("on");
        $(".ph_righth3 h3").removeClass("on");
        $(".ph_rightcomment strong").removeClass("on");
        $(".ph_rightcomment p").removeClass("on");
        $(".ph_rightcomment a").removeClass("on");
    }

    if (scrollTop >= 2100 && scrollTop <=2930 ) {
        $(".tea_leftbox .border").addClass("on");
        $(".tea_leftbox span").addClass("on");
        $(".tea_lefth3 h3").addClass("on");        
        $(".tea_leftcomment strong").addClass("on");
        $(".tea_leftcomment p").addClass("on");
        $(".tea_leftcomment a").addClass("on");
    } else if(scrollTop <= 1760 || scrollTop >= 3300) {
        $(".tea_leftbox .border").removeClass("on");
        $(".tea_leftbox span").removeClass("on");
        $(".tea_lefth3 h3").removeClass("on");
        $(".tea_leftcomment strong").removeClass("on");
        $(".tea_leftcomment p").removeClass("on");
        $(".tea_leftcomment a").removeClass("on");
    }

    if(scrollTop >= 2840 && scrollTop <= 4000) {
        $(".gl_rightbox .border").addClass("on");
        $(".gl_rightbox .img").addClass("on");
        $(".gl_righth3 h3").addClass("on");
        $(".gl_rightcomment strong").addClass("on");
        $(".gl_rightcomment p").addClass("on");
        $(".gl_rightcomment a").addClass("on");
    }else if(scrollTop <= 2490 || scrollTop >= 4050){
        $(".gl_rightbox .img").removeClass("on");
        $(".gl_rightbox .border").removeClass("on");
        $(".gl_righth3 h3").removeClass("on");
        $(".gl_rightcomment strong").removeClass("on");
        $(".gl_rightcomment p").removeClass("on");
        $(".gl_rightcomment a").removeClass("on");
    } // index_story End
    
    if (scrollTop >= 3540 && scrollTop <= 4500) {
        $(".topping_head").addClass("on");
    } else if(scrollTop >= 3270 || scrollTop >= 4550) {
        $(".topping_head").removeClass("on");
    }

    if (scrollTop >= 4100 && scrollTop <= 5150) {
        $(".topping_img").addClass("on");
        $(".five_topping").addClass("on");
    } else if(scrollTop >= 3670 || scrollTop >= 5250) {
        $(".topping_img").removeClass("on");
        $(".five_topping").removeClass("on");
    } // index_topping End

    if (scrollTop >= 4486 && scrollTop <= 5465) {
        $(".order_head h3").addClass("on");
    } else if(scrollTop >= 4400 || scrollTop >= 5470) {
        $(".order_head h3").removeClass("on");
    }

    if (scrollTop >= 4555 && scrollTop <= 5540) {
        $(".order_head p").addClass("on");
    } else if(scrollTop >= 4507 || scrollTop >= 5560) {
        $(".order_head p").removeClass("on");
    }

    if (scrollTop >= 4830 && scrollTop <= 5930) {
        $(".order_head .img").addClass("on");
    } else if(scrollTop >= 4610 || scrollTop >= 5950) {
        $(".order_head .img").removeClass("on");
    }
    
    if (scrollTop >= 5330 && scrollTop <= 6475) {
        $(".order_body .first").addClass("on");
        $(".step01 .taste_list img").addClass("on");
        $(".step01 .taste_list p").addClass("on");
        $(".order_body .second").addClass("on");
        $(".step02 .top_topping").addClass("on");
        $(".step02 .bottom_topping").addClass("on");
        $(".order_body .third").addClass("on");
        $(".step03 .sweet").addClass("on");
        $(".step03 .ice").addClass("on");
    } else if(scrollTop >= 4960 || scrollTop >= 6480) {
        $(".order_body .first").removeClass("on");
        $(".step01 .taste_list img").removeClass("on");
        $(".step01 .taste_list p").removeClass("on");
        $(".order_body .second").removeClass("on");
        $(".step02 .top_topping").removeClass("on");
        $(".step02 .bottom_topping").removeClass("on");
        $(".order_body .third").removeClass("on");
        $(".step03 .sweet").removeClass("on");
        $(".step03 .ice").removeClass("on");
    }

    if (scrollTop >= 5850 && scrollTop <= 6900) {
        $(".imperial_head").addClass("on");
    } else if(scrollTop >= 5630 || scrollTop >= 6930) {
        $(".imperial_head").removeClass("on");
    }

    if (scrollTop >= 6100) {
        $(".imperial_body p").addClass("on");
    } else if(scrollTop >= 6030) {
        $(".imperial_body p").removeClass("on");
    }
    
    if (scrollTop >= 6300) {
        $(".imperial_body img").addClass("on");
    } else if(scrollTop >= 6200) {
        $(".imperial_body img").removeClass("on");
    } // index_imperial End

    if(scrollTop >= 5783) {
        $(".top_scroll").addClass("on");
    } else if(scrollTop <= 5782)  {
        $(".top_scroll").removeClass("on")
    } //top_scroll End

    if(scrollTop >= 200) {
        $(".section02_list .top_brand_list img").addClass("on");
    } else if(scrollTop <= 1163)  {
        $(".section02_list .top_brand_list img").removeClass("on")
    } 

    if(scrollTop >= 300) {
        $(".section02_list .top_brand_list").addClass("on");
    } else if(scrollTop <= 1163)  {
        $(".section02_list .top_brand_list").removeClass("on")
    } 

    if(scrollTop >= 500) {
        $(".section02_list .bottom_brand_list img").addClass("on");
    } else if(scrollTop <= 1163)  {
        $(".section02_list .bottom_brand_list img").removeClass("on")
    } 

    if(scrollTop >= 600) {
        $(".section02_list .bottom_brand_list").addClass("on");
    } else if(scrollTop >= 300)  {
        $(".section02_list .bottom_brand_list").removeClass("on")
    } 

    if(scrollTop >= 820) {
        $(".brand_sub").addClass("on");
    } else if(scrollTop <= 810)  {
        $(".brand_sub").removeClass("on")
    } // brand End

    if(scrollTop >= 45 && scrollTop <= 980) {
        $(".left01").addClass("on");
        $(".right01").addClass("on");
    } else if(scrollTop <= 40 || scrollTop >= 990)  {
        $(".left01").removeClass("on")
        $(".right01").removeClass("on")
    }

    if(scrollTop >= 200 && scrollTop <= 1220) {
        $(".left02").addClass("on");
        $(".right02").addClass("on");
    } else if(scrollTop <= 195 || scrollTop >= 1230)  {
        $(".left02").removeClass("on")
        $(".right02").removeClass("on")
    }

    if(scrollTop >= 420) {
        $(".left03").addClass("on");
        $(".right03").addClass("on");
    } else if(scrollTop <= 415)  {
        $(".left03").removeClass("on")
        $(".right03").removeClass("on")
    }

    if(scrollTop >= 715) {
        $(".left04").addClass("on");
        $(".right04").addClass("on");
    } else if(scrollTop <= 710)  {
        $(".left04").removeClass("on")
        $(".right04").removeClass("on")
    }

    if(scrollTop >= 916) {
        $(".left05").addClass("on");
        $(".right05").addClass("on");
    } else if(scrollTop <= 915)  {
        $(".left05").removeClass("on")
        $(".right05").removeClass("on")
    } //philosophy End 

    if(scrollTop >= 100) {
        $(".global01").addClass("on");
    }

    if(scrollTop >= 1000) {
        $(".global02").addClass("on");
    }

    if(scrollTop >= 1600) {
        $(".global03").addClass("on");
    }

    if(scrollTop >= 3133) {
        $(".map_icon").addClass("on");
    }

}); // scrollevent End

















