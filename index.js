document.querySelector(".btn").addEventListener("click", function () {


var randomNumber1 = Math.floor(Math.random() * 6 + 1);
 console.log(randomNumber1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

 document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

 if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
 } else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins";
 } else {
    document.querySelector("h1").textContent = "Draw";
 }

});

