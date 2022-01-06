var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "assets/img/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src", "assets/img/dice" + randomNumber2 + ".png")

// Removes .heading class and adds .win class
document.querySelector("h1").classList.remove("heading");
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!"
    document.querySelector("h1").classList.add("win");
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!"
    document.querySelector("h1").classList.add("win");
} else {
    document.querySelector("h1").textContent = "Draw!"
    document.querySelector("h1").classList.add("win");
}