
/**
         * Youtube API 로드
         */
 let tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 let firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


$(function() {

    // 비디오 재생 버튼
    $('.btn-play').on('click', function() {
        let index = $('.btn-play').index(this)
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


let playerList = new Array();
function onYouTubeIframeAPIReady() {
    
    let videoIdList = ['XfXinUaSglY','9Xc2ozyYIPY','Do1m90G5Axc']

    for (let i = 1; i <= 3; i++) {
        
        let player = new YT.Player('player' + i , {

            videoId: videoIdList[i-1],
            // origin : 가져올 서버의 주소를 입력
            playerlets : { 
                'rel': 0,
                'loop':1,
                'controls': 1,
                'showinfo':0,
                'autohide':0,
                'modestbranding':1,
                'frameborderz':0,
                'mute':0,
                'enablejsapi':1,
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
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }