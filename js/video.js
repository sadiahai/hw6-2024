var video = document.getElementById("player1");

// Page Load
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	video.load();
});

// Play Button
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("New speed : " + video.playbackRate);
});

// Speed Up 
document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("New speed : " + video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location of the video : " + video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
	}
});

// Volume Slider
document.getElementById("slider").addEventListener("input", function () {
	document.getElementById("volume").textContent = (video.volume * 100) + "%";
	video.volume = this.value / 100;
	console.log("Current volume : " + video.volume);
	document.getElementById("volume").textContent = (video.volume * 100) + "%";
	console.log("New set volume : " + video.volume);
});

// Styled 
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Old School Styling");
});

// Original
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Original Video Styling");
});


