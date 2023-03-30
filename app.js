const form = document.getElementById("form");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

const logIN = "이정우";

link = "index2.html";
function inputValueChange() {
  let inputValue = document.getElementById("inputValue").value;
  document.getElementById("span").innerHTML = inputValue;
  if (inputValue == logIN) {
    alert("correct");
    location.replace(link);
  } else {
    alert("LOCK OFF bozo");
  }
}
function onsubmit() {
  let inputValue = document.getElementById("inputValue").value;
  document.getElementById("span").innerHTML = inputValue;
  if (inputValue == logIN) {
    alert("correct");
    location.replace(link);
  } else {
    alert("LOCK OFF bozo");
  }
}

btn.addEventListener("submit", onsubmit);
