const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progess = document.querySelector("#progess");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);
$progess.addEventListener("input", handleInput);
function handlePlay() {
  $video.play();
  $pause.hidden = false;
  $play.hidden = true;
}
function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}
function handleBackward() {
  $video.currentTime -= 10;
}
function handleForward() {
  $video.currentTime += 10;
}
function handleLoaded() {
  $progess.max = $video.duration;
}
function handleTimeUpdate() {
  $progess.value = $video.currentTime;
}
function handleInput() {
  $video.currentTime = $progess.value;
}
