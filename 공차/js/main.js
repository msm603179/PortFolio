
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
});

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
  })





  $(".tea").on("click", function(){

  });

  $(".tea").click(function(){
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

  $(".milktea").click(function(){
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

  $(".fruitmix").click(function(){
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

  $(".jewelry").click(function(){
    $(".tea_img").attr('src', 'img/teabl.png');
    $(".milktea_img").attr('src', 'img/milkbl.png');
    $(".fruit_img").attr('src', 'img/fruitbl.png');
    $(".jewelry_img").attr('src', 'img/jewelry.png');
    $("#section02 .inner").css("height","687px");
    $(".tea_list").fadeOut();
    $(".milktea_list").fadeOut();
    $(".fruitmix_list").fadeOut();
    $(".jewelry_list").fadeIn();
  });

}) 
$('#item2 .fadeIn').on('click', function() {
  $('#item2 .target-box').fadeIn()
})
