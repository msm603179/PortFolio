$(document).ready(function () {

    $("#main_slider").slick({
        speed: 500,
        infinite: true,
        arrows: true
    });

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
    });


    $('.video_slider').slick();

    // $("#main_slider").on("afterChange", function(event, slick, currentSlide){
    //
    // });




});


/**
         * Youtube API 로드
         */
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


$(function() {

    // 비디오 재생 버튼
    $('.btn-play').on('click', function() {
        var index = $('.btn-play').index(this)
        // playerList[index].playVideo()
        // playerList[index].pauseVideo()
        // playerList[index].setVolume(50)
        playerList[index].playVideo()

        // 유튜브 동영상 출력
        $('.player').eq(index).show()

        // 재생 아이콘, 썸네일 숨기기
        $('.thumbnail').eq(index).hide()
        $(this).hide()

        



    })


})


var playerList = new Array();
function onYouTubeIframeAPIReady() {
    
    var videoIdList = ['XfXinUaSglY','9Xc2ozyYIPY','Do1m90G5Axc']

    for (var i = 0; i <= 3; i++) {
        
        var player = new YT.Player('player' + i , {

            videoId: videoIdList[i-1],
            // origin : 가져올 서버의 주소를 입력
            playerVars : { 
                'rel': 0,
                'loop':1,
                'controls': 1,
                'showinfo':0,
                'autohide':0,
                'modestbranding':1,
                'frameborderz':0,
                'mute':0,
            },
            events: {
                'onReady': onPlayerReady,               // 플레이어 로드가 완료되고 API 호출을 받을 준비가 될 때마다 실행
                'onStateChange': onPlayerStateChange    // 플레이어의 상태가 변경될 때마다 실행
            }
        });
        
        playerList.push(player)
    }

}


function onPlayerReady(event) {
    console.log('onPlayerReady 실행');

    // 플레이어 자동실행 (주의: 모바일에서는 자동실행되지 않음)
    // event.target.playVideo();
}
var playerState;
function onPlayerStateChange(event) {
    playerState = event.data == YT.PlayerState.ENDED ? '종료됨' :
            event.data == YT.PlayerState.PLAYING ? '재생 중' :
            event.data == YT.PlayerState.PAUSED ? '일시중지 됨' :
            event.data == YT.PlayerState.BUFFERING ? '버퍼링 중' :
            event.data == YT.PlayerState.CUED ? '재생준비 완료됨' :
            event.data == -1 ? '시작되지 않음' : '예외';

    console.log('onPlayerStateChange 실행: ' + playerState);
}

