init();

function init() {
  createMenu();
}

function createMenu() {
  // get element
  const container = document.querySelector(".container");
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
    }

    if (e.target.dataset.diff === "easy") {
      // create board easy
      console.log("easy");
    } else if (e.target.dataset.diff === "medium") {
      // create board medium
      console.log("medium");
    } else if (e.target.dataset.diff === "hard") {
      // create board hard
      console.log("hard");
    }
  });
}
