
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
}) 

