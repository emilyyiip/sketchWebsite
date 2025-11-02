console.log("working")
const vid = document.getElementById("visualVid");
const vis = document.getElementById("visual")
const img = document.getElementById("visualImg")

//vid.playbackRate = 4.0;

img.addEventListener("mouseenter", () => {
    vid.currentTime = 0;
    vid.play();
});
