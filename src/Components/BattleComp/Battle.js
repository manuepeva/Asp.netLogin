import React, { Component } from "react";

class Battle extends Component {
  componentDidMount() {
    const shootButtom = document.getElementById("btn-redux");
    const leftArr = document.getElementById("left-arr");
    const rightArr = document.getElementById("right-arr");
    const squares = document.querySelectorAll(".grid div");
    const resultDisplay = document.querySelector("#result");
    let width = 7;
    let currentShooterIndex = 202;
    let currentInvaderIndex = 0;
    let alienInvadersTakenDown = [];
    let result = 0;
    let direction = 1;
    let invaderId;
    let shooting = {};
    let leftArrow = {};
    let rightArrow = {};
    // Define the invaders
    const alienInvaders = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
    ];
    // // drawn the alien invaders
    alienInvaders.forEach((invader) =>
      squares[currentInvaderIndex + invader].classList.add("invader")
    );
    // draw the shooter
    squares[currentShooterIndex].classList.add("shooter");
    // move the shooter along a line
    function moveShooter(e) {
      squares[currentShooterIndex].classList.remove("shooter");
      switch (e.keyCode) {
        case 37:
        case (leftArrow.innerHTML = "true"):
          if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
          break;
        case 39:
        case (rightArrow.innerHTML = "true"):
          if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
          break;
        default:
          return currentShooterIndex;
      }
      squares[currentShooterIndex].classList.add("shooter");
    }
    const testFun = (e) => {
      leftArrow.innerHTML = "true";
      moveShooter(e);
    };
    const testFun2 = (e) => {
      rightArrow.innerHTML = "true";
      moveShooter(e);
    };
    leftArr.addEventListener("mousedown", testFun, true);
    rightArr.addEventListener("mousedown", testFun2, true);
    document.addEventListener("keydown", moveShooter);
    // // Move the alien invaders
    function moveInvaders() {
      const leftEdge = alienInvaders[0] % width === 0;
      const rightEdge =
        alienInvaders[alienInvaders.length - 1] % width === width - 1;
      if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
        direction = width;
      } else if (direction === width) {
        if (leftEdge) direction = 1;
        else direction = -1;
      }
      for (let i = 0; i <= alienInvaders.length - 1; i++) {
        squares[alienInvaders[i]].classList.remove("invader");
      }
      for (let i = 0; i <= alienInvaders.length - 1; i++) {
        alienInvaders[i] += direction;
      }
      for (let i = 0; i <= alienInvaders.length - 1; i++) {
        if (!alienInvadersTakenDown.includes(i)) {
          squares[alienInvaders[i]].classList.add("invader");
        }
      }
      // decide a game is over
      if (
        squares[currentShooterIndex].classList.contains("invader", "shooter")
      ) {
        resultDisplay.textContent = "Game Over";
        squares[currentShooterIndex].classList.add("boom");
        clearInterval(invaderId);
      }
      for (let i = 0; i <= alienInvaders.length - 1; i++) {
        if (alienInvaders[i] > squares.length - (width - 1)) {
          resultDisplay.textContent = "Game Over";
          clearInterval(invaderId);
        }
      }
      // decide a win
      if (alienInvadersTakenDown.length === alienInvaders.length) {
        resultDisplay.textContent = "You Win!";
        clearInterval(invaderId);
      }
    }
    invaderId = setInterval(moveInvaders, 500);
    // shoot at aliens
    function shoot(e) {
      let laserId;
      let currentLaserIndex = currentShooterIndex;
      // move the laser from the shooter to the alien invader
      function moveLaser() {
        squares[currentLaserIndex].classList.remove("laser");
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add("laser");
        if (squares[currentLaserIndex].classList.contains("invader")) {
          squares[currentLaserIndex].classList.remove("laser");
          squares[currentLaserIndex].classList.remove("invader");
          squares[currentLaserIndex].classList.add("boom");

          setTimeout(
            () => squares[currentLaserIndex].classList.remove("boom"),
            250
          );
          clearInterval(laserId);
          const alienTakenDown = alienInvaders.indexOf(currentLaserIndex);
          alienInvadersTakenDown.push(alienTakenDown);
          result++;
          resultDisplay.textContent = result;
        }
        if (currentLaserIndex < width) {
          clearInterval(laserId);
          setTimeout(
            () => squares[currentLaserIndex].classList.remove("laser"),
            100
          );
        }
      }
      switch (e.keyCode) {
        case 32:
          laserId = setInterval(moveLaser, 100);
          break;
      }
      switch (true) {
        case shooting.innerHTML === "true":
          laserId = setInterval(moveLaser, 100);
          break;
      }
    }
    function shootOnClick(e) {
      shooting.innerHTML = "true";
      shoot(e);
    }
    shootButtom.addEventListener("mousedown", shootOnClick, true);
  }
  render() {
    return (
      <div>
        <h3>
          Play Space Invaders - Score: <span id="result"></span>
        </h3>
        <div className="grid">
          {/* 15 x 15 is 225 divs */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
export default Battle;
