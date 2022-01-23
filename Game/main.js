let paper = document.querySelector(".paper"),
  scissors = document.querySelector(".scissors"),
  rock = document.querySelector(".rock"),
  hands = [paper, rock, scissors],
  imgs = document.querySelectorAll(".game");
(svg = document.querySelector(".svg")),
  (handSection = document.querySelector(".hand-section")),
  (matchSection = document.querySelector(".match-section")),
  (computerSelect = document.querySelector(".computer-select"));
(player = document.querySelector(".player")),
  (key = true),
  (selectONE = document.querySelector(".select-one")),
  (selectTwo = document.querySelector(".select-two")),
  (secondSelect = document.querySelector(".selctionTwo"));
(playAgain = document.querySelector(".play-again")),
  (result = document.querySelector(".result")),
  (playAgainButton = document.querySelector(".play-again-button")),
  (score = document.querySelector(".score")),
  (corssButton = document.querySelector(".cross"));

console.log(score);
Number(score);
if (window.localStorage.getItem("theScore") == undefined) {
  score.innerHTML = 0;
} else {
  score.innerHTML = window.localStorage.getItem("theScore");
}

hands.forEach((ele) => {
  ele.addEventListener("click", function () {
    if ((key = true)) {
      handSection.style.cssText = "opacity: 0;";
      let handsDisapper = setInterval(function () {
        handSection.style.display = "none";
        matchSection.style.cssText = "display: flex; opacity: 0;";
      }, 1000);

      setTimeout(function () {
        clearInterval(handsDisapper);
        matchSection.style.opacity = "1";
      }, 1500);

      if ((matchSection.style.opacity = "0")) {
        player.parentElement.classList.add(ele.classList[1]);
      }
      let source = ele.children[0].src;
      player.src = source;
      if (
        document.querySelector(".select-box").children[1] ==
        "file:///C:/Users/Mohamedmuk/Desktop/taifoor%20jalon/My-GitHub/Course/PG/Front-End%20Mentor/Challenges/Challenge%203/rock-paper-scissors-master/images/icon-paper.svg"
      ) {
        document
          .querySelector(".select-box")
          .children[1].classList.add("select-one-rock");
      }
      key = false;
    }
  });
});

// ###########################################################################;

let randomeComputerSelect;
let randomeComputerSelectSRC;
let newIMG;

hands.forEach((ele) => {
  ele.onclick = function () {
    for (let i = 0; i < 1; i++) {
      randomeComputerSelect = hands[Math.floor(Math.random() * hands.length)];
      randomeComputerSelectSRC = randomeComputerSelect.children[0].src;
    }
    setTimeout(() => {
      selectTwo.style.opacity = "0";
    }, 3000);
    // /////////////////////////////
    setTimeout(() => {
      newDiv = document.createElement("div");
      let newIMG = document.createElement("img");
      computerSelect.appendChild(newDiv);
      newDiv.appendChild(newIMG);
      newIMG.setAttribute("src", randomeComputerSelectSRC);
      newIMG.setAttribute("alt", "imgTwo");
      selectTwo.style.display = "none";
      newDiv.style.opacity = "0";
      newDiv.classList.add("selectTwo");
      if (randomeComputerSelect.classList.contains("scissors")) {
        newDiv.classList.add("active-scissors");
      } else {
        if (randomeComputerSelect.classList.contains("paper")) {
          newDiv.classList.add("active-paper");
        } else {
          newDiv.classList.add("active-rock");
        }
      }
    }, 4000);

    setTimeout(function () {
      newDiv.style.opacity = "1";
      // Statments Start: //
      // // Rock Statments
      // box-shadow: inset 0px 5px 0px 2px #b8c0d0,
      // 0px 4px 2px 3px #9e1634;  
      if (
        selectONE.classList.contains("rock-color") &&
        newDiv.classList.contains("active-paper")
      ) {
        result.innerHTML = "YOU LOSE";
        score.innerHTML--;
        newDiv.style.cssText = `
          box-shadow: inset 0px 5px 0px 2px #b8c0d0,
          0px 4px 2px 3px #2f44bb,
          0px 0px 0px 50px #606e853b,
          0px 0px 0px 100px #606e8526,
          0px 0px 0px 150px #606e851f;
      `;
      } else {
        if (
          selectONE.classList.contains("rock-color") &&
          newDiv.classList.contains("active-scissors")
        ) {
          result.innerHTML = "YOU WIN";
          score.innerHTML++;
          selectONE.style.cssText = `
            box-shadow: inset 0px 5px 0px 2px #b8c0d0,
            0px 4px 2px 3px #9e1634,
            0px 0px 0px 50px #606e853b,
            0px 0px 0px 100px #606e8526,
            0px 0px 0px 150px #606e851f;
          `;
        } else {
          if (
            selectONE.classList.contains("rock-color") &&
            newDiv.classList.contains("active-rock")
          ) {
            result.innerHTML = "YOU TIE";

          }
        }
      }
      // Paper Statments
      // box-shadow: inset 0px 5px 0px 2px #b8c0d0,
      // 0px 4px 2px 3px #2f44bb;
      if (
        selectONE.classList.contains("paper-color") &&
        newDiv.classList.contains("active-rock")
      ) {
        result.innerHTML = "YOU WIN";
        score.innerHTML++;
        selectONE.style.cssText = `
          box-shadow: inset 0px 5px 0px 2px #b8c0d0,
          0px 4px 2px 3px #2f44bb, 
          0px 0px 0px 50px #606e853b,
          0px 0px 0px 100px #606e8526,
          0px 0px 0px 150px #606e851f;
      `;
      } else {
        if (
          selectONE.classList.contains("paper-color") &&
          newDiv.classList.contains("active-scissors")
        ) {
          result.innerHTML = "YOU LOSE";
          score.innerHTML--;
          newDiv.style.cssText = `
            box-shadow: inset 0px 5px 0px 2px #b8c0d0,
            0px 4px 2px 3px #bf6b29, 
            0px 0px 0px 50px #606e853b,
            0px 0px 0px 100px #606e8526,
            0px 0px 0px 150px #606e851f;
          `;
        } else {
          if (
            selectONE.classList.contains("paper-color") &&
            newDiv.classList.contains("active-paper")
          ) {
            result.innerHTML = "YOU TIE";
          }
        }
      }
      // Scissors Statments
      // box-shadow: inset 0px 5px 0px 2px #b8c0d0,
      // 0px 4px 2px 3px #bf6b29;  
      if (
        selectONE.classList.contains("scissors-color") &&
        newDiv.classList.contains("active-paper")
      ) {
        result.innerHTML = "YOU WIN";
        score.innerHTML++;
        selectONE.style.cssText = `
          box-shadow: 0px 0px 0px 50px #606e853b,
          0px 0px 0px 100px #606e8526,
          0px 0px 0px 150px #606e851f,
          inset 0px 5px 0px 2px #b8c0d0,
          0px 4px 2px 3px #bf6b29;
        `;
      } else {
        if (
          selectONE.classList.contains("scissors-color") &&
          newDiv.classList.contains("active-rock")
        ) {
          result.innerHTML = "YOU LOSE";
          score.innerHTML--;
          newDiv.style.cssText = `
            box-shadow: inset 0px 5px 0px 2px #b8c0d0,
            0px 4px 2px 3px #9e1634,
            0px 0px 0px 50px #606e853b,
            0px 0px 0px 100px #606e8526, 
            0px 0px 0px 150px #606e851f;
          `
        } else {
          if (
            selectONE.classList.contains("scissors-color") &&
            newDiv.classList.contains("active-scissors")
          ) {
            result.innerHTML = "YOU TIE";
          }
        }
      }
      // Statments End //;
      window.localStorage.setItem("theScore", score.innerHTML);
    }, 4100);

    setTimeout(function () {
      document.querySelector(".select-box").style.cssText = "margin-left: 0px;";
      computerSelect.style.cssText = "margin-right: 0px;";
      result.style.cssText = `
            font-size: 50px;
            margin-bottom: 20px;
            letter-spacing: 1px;`;
      playAgainButton.style.cssText = `
            padding: 15px 55px;
            letter-spacing: 1px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #f9f9f9;`;
      // newDiv.style.boxShadow = "0px 0px 0px 40px #606e853b, 0px 0px 0px 80px #606e8526, 0px 0px 0px 120px #606e851f";
      // newDiv.classList.add("Box-Sahdow-rock");
    }, 5000);

    setTimeout(function () {
      playAgain.style.opacity = "1";
    }, 5800);
    // ################################################################################;
  };
});

// ################################################################################;

playAgainButton.addEventListener("click", function () {
  key = true;
  newDiv.style.cssText = `
    box-shadow: 0px 0px 0px 0px #606e853b,
    0px 0px 0px 0px #606e8526,
    0px 0px 0px 0px #606e851f;
  `;
  selectONE.style.cssText = `
    box-shadow: 0px 0px 0px 0px #606e853b,
    0px 0px 0px 0px #606e8526,
    0px 0px 0px 0px #606e851f;
  `;
  matchSection.style.opacity = "0";
  setTimeout(function () {
    matchSection.style.display = "none";
    newDiv.remove();
    handSection.style.display = "block";
    handSection.style.opacity = "0";
  }, 1000);
  setTimeout(function () {
    handSection.style.opacity = "1";
    document.querySelector(".select-two").style.cssText =
      "opacity: 1; display: block;";
    playAgain.style.opacity = "0";
    document.querySelector(".select-box").style.cssText = "margin-left: 30px;";
    computerSelect.style.cssText = "margin-right: 0px;";
    result.style.cssText = `
        font-size: 0px;
        margin-bottom: 0px;
        letter-spacing: 0px;`;
    playAgainButton.style.cssText = `
        padding: 0px 0px;
        letter-spacing: 0px;
        border-radius: 0px;
        font-size: 0px;
        background-color: #f9f9f9;`;
    computerSelect.style.cssText = "margin-right: 100px;";
    document.querySelector(".select-box").style.cssText = "margin-left: 100px";
    for (let i = 0; i < 1; i++) {
      randomeComputerSelect = hands[Math.floor(Math.random() * hands.length)];
      randomeComputerSelectSRC = randomeComputerSelect.children[0].src;
    }
    newDiv.setAttribute("src", randomeComputerSelectSRC);
    document.querySelector(".select-one").classList.remove("rock-color");
    document.querySelector(".select-one").classList.remove("scissors-color");
    document.querySelector(".select-one").classList.remove("paper-color");
  }, 1500);
});

// ###########################################################################;
// Rules Button:

document.querySelector(".Rules-button").onclick = () => {
  document.querySelector(".dark-background").style.display = "block";
  document.querySelector(".rules-img").style.display = "block";
};

corssButton.onclick = () => {
  document.querySelector(".dark-background").style.display = "none";
  document.querySelector(".rules-img").style.display = "none";
};
