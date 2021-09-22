const video = document.getElementById("video1");

const videoPlaySymbol = document.getElementById("Video-play-symbol");

const playButton = document.getElementsByClassName(
  "Video-controls-panel-play-button"
)[0];

const volumeButton = document.getElementsByClassName(
  "Video-player-controls-button-volume"
)[0];

/* const volume = 0.2; */

const progress = document.getElementById("progress");

const progres = document.getElementById("progres");

/* Убрать звук при нажатии клавиши "M" или клике на кнопку "Звук". */

document.addEventListener("keydown", function (event) {
  if (
    event.code === "KeyM" &&
    volumeButton.classList.contains("Video-player-controls-button-volume")
  )
    return (
      (video.muted = true) +
      volumeButton.classList.remove("Video-player-controls-button-volume") +
      volumeButton.classList.add("Video-player-controls-button-volume-muted")
    );
  else if (
    event.code === "KeyM" &&
    volumeButton.classList.contains("Video-player-controls-button-volume-muted")
  )
    return (
      (video.muted = false) +
      volumeButton.classList.remove(
        "Video-player-controls-button-volume-muted"
      ) +
      volumeButton.classList.add("Video-player-controls-button-volume")
    );
});

volumeButton.addEventListener("click", function (event) {
  if (
    event.which === 1 &&
    volumeButton.classList.contains("Video-player-controls-button-volume")
  )
    return (
      (video.muted = true) +
      volumeButton.classList.remove("Video-player-controls-button-volume") +
      volumeButton.classList.add("Video-player-controls-button-volume-muted")
    );
  else if (
    event.which === 1 &&
    volumeButton.classList.contains("Video-player-controls-button-volume-muted")
  )
    return (
      (video.muted = false) +
      volumeButton.classList.remove(
        "Video-player-controls-button-volume-muted"
      ) +
      volumeButton.classList.add("Video-player-controls-button-volume")
    );
});

/* Ускорение/замедление проигрывания видео при нажатии клавиш "<" или ">". */

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft" && video.playbackRate === 1.0)
    return (video.playbackRate = 0.25);
  else if (event.code === "ArrowLeft" && video.playbackRate === 0.25)
    return (video.playbackRate = 1.0);
});

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight" && video.playbackRate === 1.0)
    return (video.playbackRate = 3.0);
  else if (event.code === "ArrowRight" && video.playbackRate === 3.0)
    return (video.playbackRate = 1.0);
});

/*

  else if (
    event.code === "KeyM" &&
    volumeButton.classList.contains("Video-player-controls-button-volume-muted")
  )
    return (
      (video.muted = false) +
      volumeButton.classList.remove(
        "Video-player-controls-button-volume-muted"
      ) +
      volumeButton.classList.add("Video-player-controls-button-volume")
    ); */

/* Изменение цвета шкалы прогресса видео при манипуляции с ползунком. */

progress.addEventListener("input", function () {
  progress.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${progress.value}%, #fff ${progress.value}%, white 100%)`;
});

function getProgre() {
  progress.max = video.duration;
  progress.value = video.currentTime;
  setTimeout(getProgre, 0);
}
getProgre();

/*
  let hhh = video.currentTime;
  if (videoPlaySymbol.classList.contains("Video-play-symbol-fade"))
    return alert(Math.floor(hhh)) + setTimeout(getProgre, 1050);


/*
function getProgress() {
  if (video.paused === false)
    return (
      document.getElementById("progress").value++ + setTimeout(getProgress, 150)
    );
  else return false;
}
getProgress();
*/
/*
function getProgress() {
  if (video.play() === true) return progress.value === video.currentTime;
}
getProgress();

*/

/*
progress.addEventListener("progress", function getProgress() {
  return (progress.value = video.play().currentTime);
});
/*
/*
progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`;
});
*/
/*
progress.addEventListener("input", function getProgre() {
  if (progress.value >= progress.max) return false;
  progress.value++;
  setTimeout(getProgre, 50);
}); */

/* Регулировка громкости звука.*/

/*
function volumeControl() {
  var volumeLevel = video.volume * (progres.value / 100);
  video.volume = volumeLevel;
}
volumeControl(); */
/*
var range = document.getElementById("progres");
range.onchange = function () {
  if (this.value == this.min) {
    video.volume = 0;
  } else if (this.value == this.max) {
    video.volume = 1;
  }
};      
*/

/* Шкала регулировки громкости.*/

progres.addEventListener("input", function () {
  let theValue = this.value;
  video.volume = progres.value / 100;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${theValue}%, #fff ${theValue}%, white 100%)`;
  if (progres.value === progres.min)
    return (
      volumeButton.classList.remove("Video-player-controls-button-volume") +
      volumeButton.classList.add("Video-player-controls-button-volume-muted")
    );
  else
    return (
      volumeButton.classList.remove(
        "Video-player-controls-button-volume-muted"
      ) + volumeButton.classList.add("Video-player-controls-button-volume")
    );
});

/* Переход/Выход в/из режим "Полный экран". */

document.addEventListener("keydown", function (event) {
  if (document.fullscreenElement === video && event.code === "KeyF")
    return document.exitFullscreen();
  else if (event.code === "KeyF")
    return video.requestFullscreen({ navigationUI: "hide" });
});

/*
document.addEventListener("keydown", function (event1) {
  switch (event1.code) {
    case "KeyA":
      video.play() + videoPlaySymbol.classList.toggle("Video-play-symbol-fade");
      break;
    /* case "KeyF":
      video.requestFullscreen({ navigationUI: "hide" });
      break; */ /*
    case "KeyF":
      document.exitFullscreen();
      break;
    case "Space":
      video.pause();
      break;
    default:
      alert(
        `------ THE BUTTON YOU HAVE PRESSED IS NOT AN ASSIGNED HOT BUTTON. PLEASE CHOOSE THE OTHER ONE. ------`
      );
  }
}); 
/*
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyF") {
    return video.requestFullscreen({ navigationUI: "hide" });
  }
});
*/

/* Проигрывание после нажатия кнопки "Play" на панели управления.*/

playButton.addEventListener("click", function (event) {
  if (
    event.which === 1 &&
    videoPlaySymbol.classList.contains("Video-play-symbol")
  )
    return (
      video.play() +
      playButton.classList.remove("Video-controls-panel-play-button") +
      playButton.classList.add("Video-controls-panel-pause-button") +
      videoPlaySymbol.classList.remove("Video-play-symbol") +
      videoPlaySymbol.classList.add("Video-play-symbol-fade")
    );
  else if (
    event.which === 1 &&
    videoPlaySymbol.classList.contains("Video-play-symbol-fade")
  )
    return (
      video.pause() +
      playButton.classList.remove("Video-controls-panel-pause-button") +
      playButton.classList.add("Video-controls-panel-play-button") +
      videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
      videoPlaySymbol.classList.add("Video-play-symbol")
    );
});

/* Переход в полноэкранный режим при нажатии клавиши "F" и возврат из этого режима. */
/*
document.addEventListener("keydown", function (event) {
  if (document.fullscreenElement === video && event.code === "KeyF")
    return document.exitFullscreen();
  else if (event.code === "KeyF")
    return video.requestFullscreen({ navigationUI: "hide" });
});
*/

/* Переход в полноэкранный режим после нажатия кнопки "Full Screen" на панели управления.*/

document
  .getElementsByClassName("Video-controls-panel-button")[2]
  .addEventListener("click", function (e) {
    if (e.which === 1) return video.requestFullscreen({ navigationUI: "hide" });
  });

/* Воспроизведение видео после нажатия символа Play на дисплее. */

videoPlaySymbol.addEventListener("click", function (event) {
  if (
    event.which === 1 &&
    videoPlaySymbol.classList.contains("Video-play-symbol")
  )
    return (
      video.play() +
      playButton.classList.remove("Video-controls-panel-play-button") +
      playButton.classList.add("Video-controls-panel-pause-button") +
      videoPlaySymbol.classList.remove("Video-play-symbol") +
      videoPlaySymbol.classList.add("Video-play-symbol-fade")
    );
  else if (
    event.which === 1 &&
    videoPlaySymbol.classList.contains("Video-play-symbol-fade")
  )
    return (
      video.pause() +
      videoPlaySymbol.classList.add("Video-play-symbol") +
      videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
      playButton.classList.remove("Video-controls-panel-pause-button") +
      playButton.classList.add("Video-controls-panel-play-button")
    );
});

/* Воспроизведение/пауза видео после клика на дисплей. */

video.addEventListener("click", function (event) {
  if (
    event.which === 1 &&
    videoPlaySymbol.classList.contains("Video-play-symbol")
  )
    return (
      video.play() +
      videoPlaySymbol.classList.add("Video-play-symbol-fade") +
      videoPlaySymbol.classList.remove("Video-play-symbol") +
      playButton.classList.add("Video-controls-panel-pause-button") +
      playButton.classList.remove("Video-controls-panel-play-button")
    );
  else if (
    event.which === 1 &&
    videoPlaySymbol.classList.contains("Video-play-symbol-fade")
  )
    return (
      video.pause() +
      videoPlaySymbol.classList.add("Video-play-symbol") +
      videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
      playButton.classList.remove("Video-controls-panel-pause-button") +
      playButton.classList.add("Video-controls-panel-play-button")
    );
});

/* Воспроизведение/пауза видео при нажатии пробела. */

document.addEventListener("keyup", function (event) {
  if (event.code === "Space" && video.paused === true)
    return (
      video.play() +
      video.removeAttribute("poster") +
      playButton.classList.remove("Video-controls-panel-play-button") +
      playButton.classList.add("Video-controls-panel-pause-button") +
      videoPlaySymbol.classList.remove("Video-play-symbol") +
      videoPlaySymbol.classList.add("Video-play-symbol-fade")
    );
  else if (event.code === "Space" && video.paused === false)
    return (
      video.pause() +
      video.setAttribute("poster", "assets/video/poster.jpg") +
      playButton.classList.remove("Video-controls-panel-pause-button") +
      playButton.classList.add("Video-controls-panel-play-button") +
      videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
      videoPlaySymbol.classList.add("Video-play-symbol")
    );
});

/*
document.addEventListener("keyup", function (event) {
  if (event.code === "Space" && video.hasAttribute("poster") === true)
    return (
      video.play() +
      video.removeAttribute("poster") +
      playButton.classList.remove("Video-controls-panel-play-button") +
      playButton.classList.add("Video-controls-panel-pause-button") +
      videoPlaySymbol.classList.remove("Video-play-symbol") +
      videoPlaySymbol.classList.add("Video-play-symbol-fade")
    );
  if (event.code === "Space" && video.hasAttribute("poster") === false)
    return (
      video.pause() +
      video.setAttribute("poster", "assets/video/poster.jpg") +
      playButton.classList.remove("Video-controls-panel-pause-button") +
      playButton.classList.add("Video-controls-panel-play-button") +
      videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
      videoPlaySymbol.classList.add("Video-play-symbol")
    );
  else null;
});
*/
/*
document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "KeyA":
      video.play() + videoPlaySymbol.classList.toggle("Video-play-symbol-fade");
      break;
    case "KeyF":
      video.requestFullscreen({ navigationUI: "hide" });
      break;
    case "Space":
      video.pause();
      break;
    default:
      alert(
        `------ THE BUTTON YOU HAVE PRESSED IS NOT AN ASSIGNED HOT BUTTON. PLEASE CHOOSE THE OTHER ONE. ------`
      );
  }
});
*/
/*
document
  .getElementById("background-switch-button")
  .addEventListener("mousedown", function () {
    if (
      document
        .getElementById("html")
        .classList.contains("Regular-background-html")
    ) {
      document.getElementById("html").classList.add("Light-background-html");
      document
        .getElementById("html")
        .classList.remove("Regular-background-html");
      document.getElementById("background-switch-button").innerHTML =
        "Dark mode";
      document
        .getElementById("background-switch-button")
        .classList.add("Background-button-light-mode");
      document.getElementById("aButton").classList.add("Key-button-light");
      document.getElementById("sButton").classList.add("Key-button-light");
      document.getElementById("dButton").classList.add("Key-button-light");
      document.getElementById("fButton").classList.add("Key-button-light");
      document.getElementById("gButton").classList.add("Key-button-light");
      document.getElementById("hButton").classList.add("Key-button-light");
      document.getElementById("jButton").classList.add("Key-button-light");
      document.getElementById("kButton").classList.add("Key-button-light");
      document.getElementById("lButton").classList.add("Key-button-light");
    } else {
      document.getElementById("html").classList.add("Regular-background-html");
      document.getElementById("html").classList.remove("Light-background-html");
      document.getElementById("background-switch-button").innerHTML =
        "Light mode";
      document
        .getElementById("background-switch-button")
        .classList.remove("Background-button-light-mode");
      document.getElementById("aButton").classList.remove("Key-button-light");
      document.getElementById("sButton").classList.remove("Key-button-light");
      document.getElementById("dButton").classList.remove("Key-button-light");
      document.getElementById("fButton").classList.remove("Key-button-light");
      document.getElementById("gButton").classList.remove("Key-button-light");
      document.getElementById("hButton").classList.remove("Key-button-light");
      document.getElementById("jButton").classList.remove("Key-button-light");
      document.getElementById("kButton").classList.remove("Key-button-light");
      document.getElementById("lButton").classList.remove("Key-button-light");
    }
  });
*/

/* Изменение проирываемого видео */

document
  .getElementsByClassName("Video-controls-panel-button")[0]
  .addEventListener("click", function (e) {
    if (e.which === 1 && video.getAttribute("src") === "assets/video/video.mp4")
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.removeAttribute("src", "assets/video/video.mp4") +
        video.removeAttribute("poster", "assets/video/poster.jpg") +
        video.setAttribute("src", "assets/video/video2.mp4") +
        video.setAttribute("poster", "assets/video/poster2.jpg")
      );
    if (
      e.which === 1 &&
      video.getAttribute("src") === "assets/video/video2.mp4"
    )
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.removeAttribute("src", "assets/video/video2.mp4") +
        video.removeAttribute("poster", "assets/video/poster2.jpg") +
        video.setAttribute("src", "assets/video/video4.mp4") +
        video.setAttribute("poster", "assets/video/poster4.png")
      );
    else if (
      e.which === 1 &&
      video.getAttribute("src") === "assets/video/video4.mp4"
    )
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.removeAttribute("src", "assets/video/video4.mp4") +
        video.removeAttribute("poster", "assets/video/poster4.png") +
        video.setAttribute("src", "assets/video/video.mp4") +
        video.setAttribute("poster", "assets/video/poster.jpg")
      );
  });
/*document
  .getElementsByClassName("Video-controls-panel-button")[0]
  .addEventListener("click", function (e) {
    if (e.which === 1 && video.hasAttribute("src", "assets/video/video2.mp4"))
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.removeAttribute("src", "assets/video/video2.mp4") +
        video.removeAttribute("poster", "assets/video/poster2.jpg") +
        video.setAttribute("src", "assets/video/video4.mp4") +
        video.setAttribute("poster", "assets/video/poster4.png")
      );
  }); */
/*
document
  .getElementsByClassName("Video-controls-panel-button")[0]
  .addEventListener("click", function (e) {
    if (e.which === 1 && video.hasAttribute("src", "assets/video/video2.mp4"))
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.setAttribute("src", "assets/video/video4.mp4") +
        video.setAttribute("poster", "assets/video/poster4.png")
      );
  });
  */
/*
document
  .getElementsByClassName("Video-controls-panel-button")[0]
  .addEventListener("click", function (e) {
    if (e.which === 1 && video.hasAttribute("src", "assets/video/video4.mp4"))
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.setAttribute("src", "assets/video/video.mp4") +
        video.setAttribute("poster", "assets/video/poster.jpg")
      );
  });
*/
document
  .getElementsByClassName("Video-controls-panel-button")[1]
  .addEventListener("click", function (e) {
    if (e.which === 1 && video.getAttribute("src") === "assets/video/video.mp4")
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.removeAttribute("src", "assets/video/video.mp4") +
        video.removeAttribute("poster", "assets/video/poster.jpg") +
        video.setAttribute("src", "assets/video/video4.mp4") +
        video.setAttribute("poster", "assets/video/poster4.png")
      );
    if (
      e.which === 1 &&
      video.getAttribute("src") === "assets/video/video4.mp4"
    )
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.removeAttribute("src", "assets/video/video4.mp4") +
        video.removeAttribute("poster", "assets/video/poster4.png") +
        video.setAttribute("src", "assets/video/video2.mp4") +
        video.setAttribute("poster", "assets/video/poster2.jpg")
      );
    else if (
      e.which === 1 &&
      video.getAttribute("src") === "assets/video/video2.mp4"
    )
      return (
        video.pause +
        playButton.classList.remove("Video-controls-panel-pause-button") +
        playButton.classList.add("Video-controls-panel-play-button") +
        videoPlaySymbol.classList.remove("Video-play-symbol-fade") +
        videoPlaySymbol.classList.add("Video-play-symbol") +
        video.removeAttribute("src", "assets/video/video2.mp4") +
        video.removeAttribute("poster", "assets/video/poster2.jpg") +
        video.setAttribute("src", "assets/video/video.mp4") +
        video.setAttribute("poster", "assets/video/poster.jpg")
      );
  });

confirm(
  ` - You can change videos processed by the video-player clicking "Backward"/"Forward"-button located to the left/right from the "Play"-button on the video-player-controls-panel.

 - Full description of the tasks done You can find in the console.`
);

console.log(`Tasks done:

1. Video-player was designed according to Museum-task example.

2. Video-player obligatory functionality:
 - Space-key pressing toggles play/pause;
 - "M"-button mutes/unmutes video-volume;
 - ">"—button(right-button) makes video-playback 3 times faster.
 - "<"—button(left-button) makes video-playback 4 times slower.
 - "F"-button toggles full-screen-mode.

3. Video-player optional functionality:
- Clicking "Backward" or "Forward"-button located to the left/right from the "Play"-button on the video-player-controls-panel changes the video-file processed by the video-player.`);
