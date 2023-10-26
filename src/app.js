/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excusePhrase = [who, action, what, when];
  let answerPhrase = [];
  let randomNumber = 0;
  for (let i = 0; i < excusePhrase.length; i++) {
    randomNumber = Math.floor(Math.random() * excusePhrase[i].length);
    answerPhrase.push(excusePhrase[i][randomNumber]);
  }
  let htmlText = document.getElementById("excuse");
  return (htmlText.innerHTML = answerPhrase.join(" "));
};
