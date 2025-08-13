console.log("working")
const vid = document.getElementById("video");
vid.playbackRate = 4.0;

vid.addEventListener("mouseenter", () => {
    vid.currentTime = 0;
    vid.play();
});