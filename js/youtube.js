 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.

 function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
     videoId: 'An6LvWQuj_8', //최소 재생할 유튜브 영상ID
     playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복 재생할 유투브 영상
     },
     events: {
      onReady: function(event) { // onReady라는 메소드가 실행되면
        event.target.mute(); // 음소거
      }
     }
   });
 }