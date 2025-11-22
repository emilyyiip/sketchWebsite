const vid = document.getElementById("visualVid");
const vis = document.getElementById("visual")
const img = document.getElementById("visualImg")

vid.playbackRate = 4.0;

vid.addEventListener("mouseenter", () => {
    vid.currentTime = 0;
    vid.play();
});
