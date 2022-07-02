
  $(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        fade: true
      });
}); // index End

$(document).ready(function (){
  $('.face').mouseover(function(){
    $(this).attr('src', 'img/face_hover.png');
  })

  $('.insta').mouseover(function(){
    $(this).attr('src', 'img/insta_hover.png');
  })

  $('.kakao').mouseover(function(){
    $(this).attr('src', 'img/kakao_hover.png');
  })

  $('.face').mouseout(function(){
    $(this).attr('src', 'img/face.png');
  })

  $('.insta').mouseout(function(){
    $(this).attr('src', 'img/insta.png');
  })
  
  $('.kakao').mouseout(function(){
    $(this).attr('src', 'img/kakao.png');
  }) // common End

  $(".tea").on("click", function(){
    $(".tea_img").attr('src', 'img/tea.png');
    $(".milktea_img").attr('src', 'img/milkbl.png');
    $(".fruit_img").attr('src', 'img/fruitbl.png');
    $(".jewelry_img").attr('src', 'img/jewelrybl.png');
    
    $("#section02 .inner").css("height","687px");

    $(".tea_list").fadeIn();
    $(".milktea_list").fadeOut();
    $(".fruitmix_list").fadeOut();
    $(".jewelry_list").fadeOut();
  });


  $(".milktea").on("click", function(){
    $(".tea_img").attr('src', 'img/teabl.png');
    $(".milktea_img").attr('src', 'img/milk.png');
    $(".fruit_img").attr('src', 'img/fruitbl.png');
    $(".jewelry_img").attr('src', 'img/jewelrybl.png');

    $("#section02 .inner").css("height","1860px");

    $(".tea_list").fadeOut();
    $(".milktea_list").fadeIn();
    $(".fruitmix_list").fadeOut();
    $(".jewelry_list").fadeOut();
  });

  $(".fruitmix").on("click", function(){
    $(".tea_img").attr('src', 'img/teabl.png');
    $(".milktea_img").attr('src', 'img/milkbl.png');
    $(".fruit_img").attr('src', 'img/fruit.png');
    $(".jewelry_img").attr('src', 'img/jewelrybl.png');

    $("#section02 .inner").css("height","1239px");

    $(".tea_list").fadeOut();
    $(".milktea_list").fadeOut();
    $(".fruitmix_list").fadeIn();
    $(".jewelry_list").fadeOut();
  });
  
  $(".jewelry").on("click", function(){
    $(".tea_img").attr('src', 'img/teabl.png');
    $(".milktea_img").attr('src', 'img/milkbl.png');
    $(".fruit_img").attr('src', 'img/fruitbl.png');
    $(".jewelry_img").attr('src', 'img/jewelry.png');

    $("#section02 .inner").css("height","687px");

    $(".tea_list").fadeOut();
    $(".milktea_list").fadeOut();
    $(".fruitmix_list").fadeOut();
    $(".jewelry_list").fadeIn();    
  }); // tea End

  $(".korea_icon").on("click", function(){
    $(".korea_detail").fadeIn();
  })

  $(".japan_icon").on("click", function(){
    $(".japan_detail").fadeIn();
  })
  
  $(".china_icon").on("click", function(){
    $(".china_detail").fadeIn();
  })

  $(".hongkong_icon").on("click", function(){
    $(".hongkong_detail").fadeIn();
  })

  $(".taiwan_icon").on("click", function(){
    $(".taiwan_detail").fadeIn();
  })

  $(".australia_icon").on("click", function(){
    $(".australia_detail").fadeIn();
  })

  $(".vietnam_icon").on("click", function(){
    $(".vietnam_detail").fadeIn();
  })

  $(".uk_icon").on("click", function(){
    $(".uk_detail").fadeIn();
  })

  $(".usa_icon").on("click", function(){
    $(".usa_detail").fadeIn();
  })

  $(".mexico_icon").on("click", function(){
    $(".mexico_detail").fadeIn();
  })

  $(".canada_icon").on("click", function(){
    $(".canada_detail").fadeIn();
  })

  $(".close").on("click", function(){
    $(".detail").fadeOut();
  }) // global End
}) 
