function myFun2() {
  const myDiv = document.getElementById('game');
  const currentBackgroundImageUrl = myDiv.style.backgroundImage;

  const newBackgroundImageUrl = 'url("bg2.jpg")';

  myDiv.style.backgroundImage = newBackgroundImageUrl;
}

function myFun3() {
  const myDiv = document.getElementById('game');
  const currentBackgroundImageUrl = myDiv.style.backgroundImage;

  const newBackgroundImageUrl = 'url("bg3.jpg")';

  myDiv.style.backgroundImage = newBackgroundImageUrl;
}