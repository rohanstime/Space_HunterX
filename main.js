var road = document.querySelector("#game");
var car1 = document.querySelector("#car1");
var car2 = document.querySelector("#car2");
var car3 = document.querySelector("#car3");
var star = document.querySelector("#star");
var result = document.querySelector("#gameover");
var game = document.querySelector("#game");
var score = document.querySelector("#score");
var score2 = document.querySelector("#score2");
var counter = 0;

///////
var times = document.querySelector(".timer");
var div2 = document.getElementById("myDiv2");
var button = document.querySelector("button");
//////


//car moving animation 
car2.addEventListener("animationiteration", function() {

  var random = (Math.floor((Math.random() * 3)) * 130);
  car2.style.left = random + "px";
  counter++;
  score2.innerHTML = `Score: ${counter}`;
})

//car 3 moving animation
car3.addEventListener("animationiteration", function() {

  var random = (Math.floor((Math.random() * 3)) * 130);
  car3.style.right = random + "px";
  counter++;
  score2.innerHTML = `Score: ${counter}`;
})

//star
star.addEventListener("animationiteration", function() {

  var random = (Math.floor((Math.random() * 3)) * 130);
  star.style.left = random + "px";
  counter++;
  score2.innerHTML = `Score: ${counter}`;
})









//game owner - Muhammad Rohan //
window.addEventListener("keydown", function(e) {
  if (e.keyCode == 39) {
    var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
    if (car1left < 260) {
      car1.style.left = (car1left + 130) + "px";
    }
    var audio = new Audio('jump.mp3');
    audio.play();
  }
  if (e.keyCode == 37)
  {
    var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
    if (car1left > 0) {
      car1.style.left = (car1left - 130) + "px";
    }
    var audio = new Audio('jump.mp3');
    audio.play();
  }
});





//for mobile start
function moveleft() {
  var audio = new Audio('jump.mp3');
  audio.play();
  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  
  var carXleft = parseInt(window.getComputedStyle(carX).getPropertyValue("left"));
  
  console.log(car1left);
  if (car1left > 0) {
    car1.style.left = (car1left - 130) + "px";
  }
  if (carXleft > 0) {
    carX.style.left = (carXleft - 130) + "px";
  }
}

function moveright() {
  var audio = new Audio('jump.mp3');
  audio.play();
  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  
  var carXleft = parseInt(window.getComputedStyle(carX).getPropertyValue("left"));
  
  
  if (car1left < 260) {
    car1.style.left = (car1left + 130) + "px";
  }
  if (carXleft < 260) {
    carX.style.left = (carXleft + 130) + "px";
  }
}

//for mobile end



setInterval(function gameover() {
  var car2top = parseInt(window.getComputedStyle(car2).getPropertyValue("top"));
  var car2left = parseInt(window.getComputedStyle(car2).getPropertyValue("left"));
  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  if ((car2left === car1left) && (car2top > 500) && (car2top < 520)) {
    var audio = new Audio('crash.mp3');
    audio.play();
    result.style.display = "block";
    game.style.display = "none";
    score.innerHTML = `Your Score: ${counter}`;
    conter = 0;
    score2.style.display = "none";

    button.style.display = "none";
    times.style.display = "none";
  }
}, 10)




//for car 3



















setInterval(function gameover() {
  var car3top = parseInt(window.getComputedStyle(car3).getPropertyValue("top"));

  var car3left = parseInt(window.getComputedStyle(car3).getPropertyValue("left"));

  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));

  if ((car3left === car1left) && (car3top > 500) && (car3top < 520) )
  
  
  
  {
    var audio = new Audio('crash.mp3');
    audio.play();
    result.style.display = "block";
    game.style.display = "none";
    score.innerHTML = `Your Score: ${counter}`;
    conter = 0;
    score2.style.display = "none";
    button.style.display = "none";
    //div2.style.display = "none";
    times.style.display = "none";
  }


}, 10)
























//super point


setInterval(function gameover() {
  var startop = parseInt(window.getComputedStyle(star).getPropertyValue("top"));

  var starleft = parseInt(window.getComputedStyle(star).getPropertyValue("left"));

  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));

  if ((starleft === car1left) && (startop > 500) && (startop < 520)) {
    var audio = new Audio('crash.mp3');
    audio.play();
    result.style.display = "block";
    game.style.display = "none";
    score.innerHTML = `Your Score: ${counter}`;
    conter = 0;
    score2.style.display = "none";
    button.style.display = "none";
    //div2.style.display = "none";
    times.style.display = "none";
  }
}, 10)



//game over 2........

