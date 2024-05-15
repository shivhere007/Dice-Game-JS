var randomVariable1 = Math.random() * 6;
randomVariable1 = Math.floor(randomVariable1) + 1;

var randomImage = "dice" + randomVariable1 + ".png";

var randomImageSource = "./images/" + randomImage;

document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomVariable2 = Math.random() * 6;
randomVariable2 = Math.floor(randomVariable2) + 1;

var randomImage2 = "dice" + randomVariable2 + ".png";

var randomImageSource2 = "./images/" + randomImage2;

document.querySelector(".img2").setAttribute("src", randomImageSource2);

if (randomVariable1 > randomVariable2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomVariable1 === randomVariable2) {
  document.querySelector("h1").innerHTML = "its a tie";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
