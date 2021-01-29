// get container
const container = document.querySelector(".container");

init();

function init() {
  createMenu();
}

function createMenu() {
  //   create menu
  const menu = document.createElement("div");
  menu.classList.add("menu-container");
  menu.innerHTML = `
        <button class="menu-btn btn" data-action="play">play</button>
        <button class="menu-btn btn" data-action="score">high score</button>  
  `;
  container.appendChild(menu);
  //   addEventListener
  menu.addEventListener("click", function (e) {
    if (e.target.dataset.action === "play") {
      // display difficulty menu
      menu.innerHTML = `<h1 class="menu-difficulty-text">Select difficulty</h1>
        <div class="menu-difficulty">
          <button class="diff-btn btn" data-diff="easy">easy</button>
          <button class="diff-btn btn" data-diff="medium">medium</button>
          <button class="diff-btn btn" data-diff="hard">hard</button>
        </div>`;
    } else if (e.target.dataset.action === "score") {
      // display high score
      console.log("highscore");
    } else if (e.target.classList.contains("diff-btn")) {
      // Start the Game with chosen difficulty
      startGame(e.target.dataset.diff);
    }
  });
}

function startGame(difficulty) {
  // Set box amount based on difficulty
  let squareTotal;
  switch (difficulty) {
    case "easy":
      squareTotal = 15;
      break;
    case "medium":
      squareTotal = 18;
      break;
    case "hard":
      squareTotal = 36;
      break;
  }
  // Create GameBoard
  container.innerHTML = `<div class="info-container">
        <h3 class="score">Score: 250</h3>
        <h3 class="time">Time: 60</h3>
      </div>
      <div class="grid">
      </div>`;
  const grid = document.querySelector(".grid");
  grid.classList.add(`grid-${difficulty}`);
  // Create box based on difficulty
  for (let i = 0; i < squareTotal; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }

  console.log(difficulty);
  console.log(`square: ${squareTotal}`);
}
