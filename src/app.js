import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suits = ["♦", "♥", "♠", "♣"];
  let rank_card = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  // document.querySelector("#root_top").innerHTML = suits[Math.floor(Math.random() * suits.length)];
  let sameRoot = document.querySelector("#root_top").innerHTML = suits[Math.floor(Math.random() * suits.length)];
  document.querySelector("#root_bottom").innerHTML = sameRoot;
  document.querySelector("#rank").innerHTML = rank_card[Math.floor(Math.random() * rank_card.length)];

  let color;
  if (sameRoot == "♦" || sameRoot == "♥") {
    color = "red"
  } else {
    color = "black";
  }

document.querySelector("#root_top").style.color = color;
document.querySelector("#root_bottom").style.color = color;



};
