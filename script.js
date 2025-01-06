document.addEventListener("DOMContentLoaded", function () {

  var hitNumber = 0;

  function bubbleMaker() {
    var bubbles = "";

    for (let i = 1; i <= 192; i++) {
      bubbles += `<div class="bubble" id="bu">${Math.floor(
        Math.random() * 10
      )}</div>`;
    }

    document.querySelector("#bottom-panel").innerHTML = bubbles;
  }

  function bubbleHit() {
    hitNumber =  Math.floor(Math.random() * 10)
    document.querySelector("#hitNumber").textContent = hitNumber;
  }

  var timer = 60;
  function setTimer() {
    var timeInterval = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector("#timer-box").textContent = timer;
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  var score = 0;
  function increaseScore() {
    score += 10;
    document.querySelector("#scorecard").textContent = score;
  }

  document
    .getElementById("bottom-panel")
    .addEventListener("click", function (event) {
      var clickedNumber = Number(event.target.textContent);

      if (clickedNumber === hitNumber ) {
        bubbleMaker();
        bubbleHit();
        increaseScore();
      }

    });

  bubbleMaker();
  bubbleHit();
  setTimer();
});
