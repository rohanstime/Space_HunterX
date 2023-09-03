var img = document.getElementById("controlButton");
var btn1 = document.getElementById("btn1"); 
var btn2 = document.getElementById("btn2");

/*
document.getElementById("playButton").onclick = playAnimation;

document.getElementById("pauseButton").onclick = pauseAnimation;



function playAnimation() {
  
  document.getElementById("car3").style.animationPlayState = "running";
  document.getElementById("car2").style.animationPlayState = "running";
  document.getElementById("car1").style.animationPlayState = "running";
  btn1.style.display = "block";
  btn2.style.display = "block";
}

function pauseAnimation() {
  img.src = "play-circle.png";
  document.getElementById("car3").style.animationPlayState = "paused";
  document.getElementById("car2").style.animationPlayState = "paused";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

*/
var isPlaying = false;

function togglePlayState() {
  isPlaying = !isPlaying;

  if (isPlaying){
    img.src = "pause-circle.png";
    document.getElementById("car2").style.animationPlayState = "running";
    document.getElementById("car3").style.animationPlayState = "running";
    document.getElementById("star").style.animationPlayState = "running";
    btn1.style.display = "block";
    btn2.style.display = "block";
    
  } 
  else {
    img.src = "play-circle.png";
    document.getElementById("car2").style.animationPlayState = "paused";
    document.getElementById("car3").style.animationPlayState = "paused";
    document.getElementById("star").style.animationPlayState = "paused";
    btn1.style.display = "none";
    btn2.style.display = "none";
    
  }
}

document.getElementById("controlButton").onclick = togglePlayState;
