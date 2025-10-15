// DOM Elements
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const hands = [paper, rock, scissors];
const imgs = document.querySelectorAll(".game");
const svg = document.querySelector(".svg");
const handSection = document.querySelector(".hand-section");
const matchSection = document.querySelector(".match-section");
const computerSelect = document.querySelector(".computer-select");
const player = document.querySelector(".player");
const selectONE = document.querySelector(".select-one");
const selectTwo = document.querySelector(".select-two");
const secondSelect = document.querySelector(".selctionTwo");
const playAgain = document.querySelector(".play-again");
const result = document.querySelector(".result");
const playAgainButton = document.querySelector(".play-again-button");
const score = document.querySelector(".score");
const crossButton = document.querySelector(".cross");

// Game state
let key = true;
let newDiv;
let randomComputerSelect;
let randomComputerSelectSRC;

// Initialize score from localStorage
function initializeScore() {
  if (window.localStorage.getItem("theScore") === undefined) {
    score.innerHTML = 0;
  } else {
    score.innerHTML = window.localStorage.getItem("theScore");
  }
}

// Update score in localStorage
function updateScore() {
  window.localStorage.setItem("theScore", score.innerHTML);
}

// Handle game result and visual effects
function handleGameResult(playerChoice, computerChoice) {
  // Rock beats Scissors, Scissors beats Paper, Paper beats Rock
  if (
    (playerChoice === "rock-color" && computerChoice === "active-scissors") ||
    (playerChoice === "scissors-color" && computerChoice === "active-paper") ||
    (playerChoice === "paper-color" && computerChoice === "active-rock")
  ) {
    // Player wins
    result.innerHTML = "YOU WIN";
    score.innerHTML++;
    
    // Add winner effect to player's choice
    const shadowEffect = `
      box-shadow: inset 0px 5px 0px 2px #b8c0d0,
      0px 4px 2px 3px ${playerChoice === "rock-color" ? "#9e1634" : 
                        playerChoice === "paper-color" ? "#2f44bb" : "#bf6b29"},
      0px 0px 0px 50px #606e853b,
      0px 0px 0px 100px #606e8526,
      0px 0px 0px 150px #606e851f;
    `;
    selectONE.style.cssText = shadowEffect;
  } 
  else if (
    (playerChoice === "rock-color" && computerChoice === "active-paper") ||
    (playerChoice === "scissors-color" && computerChoice === "active-rock") ||
    (playerChoice === "paper-color" && computerChoice === "active-scissors")
  ) {
    // Player loses
    result.innerHTML = "YOU LOSE";
    score.innerHTML--;
    
    // Add winner effect to computer's choice
    const shadowEffect = `
      box-shadow: inset 0px 5px 0px 2px #b8c0d0,
      0px 4px 2px 3px ${computerChoice === "active-rock" ? "#9e1634" : 
                        computerChoice === "active-paper" ? "#2f44bb" : "#bf6b29"},
      0px 0px 0px 50px #606e853b,
      0px 0px 0px 100px #606e8526,
      0px 0px 0px 150px #606e851f;
    `;
    newDiv.style.cssText = shadowEffect;
  } 
  else {
    // Tie
    result.innerHTML = "YOU TIE";
  }
  
  // Update score in localStorage
  updateScore();
}

// Show computer's choice
function showComputerChoice() {
  newDiv = document.createElement("div");
  const newIMG = document.createElement("img");
  
  computerSelect.appendChild(newDiv);
  newDiv.appendChild(newIMG);
  newIMG.setAttribute("src", randomComputerSelectSRC);
  newIMG.setAttribute("alt", "imgTwo");
  
  selectTwo.style.display = "none";
  newDiv.style.opacity = "0";
  newDiv.classList.add("selectTwo");
  
  // Add appropriate class based on computer's choice
  if (randomComputerSelect.classList.contains("scissors")) {
    newDiv.classList.add("active-scissors");
  } else if (randomComputerSelect.classList.contains("paper")) {
    newDiv.classList.add("active-paper");
  } else {
    newDiv.classList.add("active-rock");
  }
}

// Show game result UI
function showGameResult() {
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
}

// Handle player's choice
function handlePlayerChoice(element) {
  // Get computer's random choice
  randomComputerSelect = hands[Math.floor(Math.random() * hands.length)];
  randomComputerSelectSRC = randomComputerSelect.children[0].src;
  
  // Hide hand selection and show match section
  handSection.style.cssText = "opacity: 0;";
  
  const handsDisappear = setInterval(function () {
    handSection.style.display = "none";
    matchSection.style.cssText = "display: flex; opacity: 0;";
  }, 1000);

  setTimeout(function () {
    clearInterval(handsDisappear);
    matchSection.style.opacity = "1";
  }, 1500);

  // Set player's choice
  player.parentElement.classList.add(element.classList[1]);
  player.src = element.children[0].src;
  
  // Animation sequence
  setTimeout(() => {
    selectTwo.style.opacity = "0";
  }, 3000);
  
  setTimeout(() => {
    showComputerChoice();
  }, 4000);

  setTimeout(function () {
    newDiv.style.opacity = "1";
    handleGameResult(
      selectONE.classList.contains("rock-color") ? "rock-color" : 
      selectONE.classList.contains("paper-color") ? "paper-color" : "scissors-color",
      newDiv.classList.contains("active-rock") ? "active-rock" : 
      newDiv.classList.contains("active-paper") ? "active-paper" : "active-scissors"
    );
  }, 4100);

  setTimeout(function () {
    showGameResult();
  }, 5000);

  setTimeout(function () {
    playAgain.style.opacity = "1";
  }, 5800);
}

// Reset game for a new round
function resetGame() {
  key = true;
  
  // Reset visual effects
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
  
  // Hide match section and show hand section
  matchSection.style.opacity = "0";
  
  setTimeout(function () {
    matchSection.style.display = "none";
    newDiv.remove();
    handSection.style.display = "block";
    handSection.style.opacity = "0";
  }, 1000);
  
  setTimeout(function () {
    // Reset UI elements
    handSection.style.opacity = "1";
    document.querySelector(".select-two").style.cssText = "opacity: 1; display: block;";
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
    
    // Reset player's choice classes
    document.querySelector(".select-one").classList.remove("rock-color");
    document.querySelector(".select-one").classList.remove("scissors-color");
    document.querySelector(".select-one").classList.remove("paper-color");
  }, 1500);
}

// Show/hide rules modal
function toggleRulesModal(show) {
  document.querySelector(".dark-background").style.display = show ? "block" : "none";
  document.querySelector(".rules-img").style.display = show ? "block" : "none";
}

// Initialize the game
function initGame() {
  // Initialize score
  initializeScore();
  
  // Add click event listeners to hands
  hands.forEach((element) => {
    element.addEventListener("click", function() {
      if (key === true) {
        handlePlayerChoice(element);
        key = false;
      }
    });
  });
  
  // Play again button event listener
  playAgainButton.addEventListener("click", resetGame);
  
  // Rules button event listeners
  document.querySelector(".Rules-button").onclick = () => toggleRulesModal(true);
  crossButton.onclick = () => toggleRulesModal(false);
}

// Start the game
initGame();
