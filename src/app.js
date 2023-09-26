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
  let phrase = [who, action, what, when];
  let answer = [];
  let random = 0;
  for (let i = 0; i < phrase.length; i++) {
    random = Math.floor(Math.random() * phrase[i].length);
    answer.push(phrase[i][random]);
  }
  let text = document.getElementById("excuse");
  return (text.innerHTML = answer.join(" "));
};
