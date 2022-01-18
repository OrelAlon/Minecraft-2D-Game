//how big is my world going to be?
//(if I changed it here I need to update css-grid as well )

const gameSize = 30;
// let $ = (x) => document.querySelector(x);

/////define the layers of my world....

const container = document.querySelector(".container");
const world = document.querySelector(".world");
const toolbar = document.querySelector(".toolbar");
const tools = document.querySelector(".tools");
const elements = document.querySelector(".elements");

// set the matrix function

function matrix() {
  for (let row = 0; row < gameSize; row++) {
    gameArea[row] = [];
    for (let col = 0; col < gameSize; col++) {
      gameArea[row][col] = document.createElement("div");
      gameArea[row][col].setAttribute("data-row", row);
      gameArea[row][col].setAttribute("data-col", col);
      gameArea[row][col].classList.add("tile");
      world.appendChild(gameArea[row][col]);
    }
  }
}

// the reset function (add more world?)

function resetting() {
  //////  -----------------> sky
  for (let row = 0; row < gameSize; row++) {
    for (let col = 0; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "sky");
    }
  }

  //////  -----------------> grass

  for (let row = 19; row < 20; row++) {
    for (let col = 0; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "grass");
    }
  }

  //////  -----------------> land

  for (let row = 20; row < gameSize; row++) {
    for (let col = 0; col < gameSize; col++) {
      gameArea[row][col].setAttribute("id", "land");
    }
  }

  //////  -----------------> stone

  for (let row = 18; row < 19; row++) {
    for (let col = 20; col < 22; col++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let row = 18; row < 19; row++) {
    for (let col = 24; col < 26; col++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let row = 17; row < 18; row++) {
    for (let col = 21; col < 25; col++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let row = 16; row < 17; row++) {
    for (let col = 22; col < 24; col++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let row = 18; row < 19; row++) {
    for (let col = 12; col < 14; col++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let row = 18; row < 19; row++) {
    for (let col = 9; col < 11; col++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  for (let row = 17; row < 18; row++) {
    for (let col = 10; col < 13; col++) {
      gameArea[row][col].setAttribute("id", "stone");
    }
  }
  //////  ----------------> wood

  for (let row = 14; row < 19; row++) {
    for (let col = 17; col < 18; col++) {
      gameArea[row][col].setAttribute("id", "wood");
    }
  }

  //////  ---------------> greengold

  for (let row = 10; row < 14; row++) {
    for (let col = 16; col < 19; col++) {
      gameArea[row][col].setAttribute("id", "greengold");
    }
  }

  //////  -----------------> cloud

  for (let row = 2; row < 5; row++) {
    for (let col = 5; col < 8; col++) {
      gameArea[row][col].setAttribute("id", "cloud");
    }
  }
  for (let row = 3; row < 6; row++) {
    for (let col = 23; col < 26; col++) {
      gameArea[row][col].setAttribute("id", "cloud");
    }
  }
  gameArea[3][4].setAttribute("id", "cloud");
  gameArea[3][8].setAttribute("id", "cloud");
  gameArea[4][22].setAttribute("id", "cloud");
  gameArea[4][26].setAttribute("id", "cloud");

  //////  -----------------> goldgrey

  for (let row = 18; row < 19; row++) {
    for (let col = 22; col < 24; col++) {
      gameArea[row][col].setAttribute("id", "goldgrey");
    }
    gameArea[18][11].setAttribute("id", "goldgrey");
  }

  resetInventory();
}

function createNewGame() {
  matrix();
  resetting();
}

let gameArea = [];
createNewGame();

//////  -----------------> the tools bar on the side

const toolbarUp = document.createElement("h1");
toolbarUp.classList.add("headline");
toolbarUp.textContent = "Inventory";
toolbar.insertAdjacentElement("afterbegin", toolbarUp);

const toolbarHead = document.createElement("h2");
toolbarHead.textContent = "Tools";
toolbarHead.classList.add("headline");
tools.insertAdjacentElement("afterbegin", toolbarHead);

const toolList = document.createElement("ul");
toolList.classList.add("toolList");
tools.insertAdjacentElement("beforeend", toolList);

function createTool(name) {
  const element = document.createElement("li");
  element.setAttribute("id", name);
  element.textContent = name;
  element.classList.add("toolBox");
  toolList.appendChild(element);
}

createTool("axe");
createTool("shovel");
createTool("hoe");

//////  -----------------> the element

const materialsHead = document.createElement("h2");
materialsHead.textContent = "Elements";
materialsHead.classList.add("headline");
elements.insertAdjacentElement("afterbegin", materialsHead);

const elementList = document.createElement("ul");
elementList.classList.add("elementList");
elements.insertAdjacentElement("beforeend", elementList);

function createMaterial(name) {
  let mat = document.createElement("li");
  mat.setAttribute("id", name);
  mat.textContent = 0;
  mat.classList.add("elementBox");
  elementList.appendChild(mat);
}

createMaterial("grass");
createMaterial("land");
createMaterial("stone");
createMaterial("wood");
createMaterial("greengold");
createMaterial("goldgrey");

//////  -----------------> the buttons
//////  -----------------> restartButtom

const restartButtom = document.createElement("button");
restartButtom.classList.add("restartButtom");
toolbar.insertAdjacentElement("beforeend", restartButtom);

//////  -----------------> gobackButtom

const gobackButtom = document.createElement("button");
gobackButtom.classList.add("gobackButtom");
toolbar.insertAdjacentElement("beforeend", gobackButtom);

// reset game button
restartButtom.addEventListener("click", resetting);
// go back  button
gobackButtom.addEventListener("click", startpage);

///////  -----------------> go to page one

function startpage() {
  return (location.href = "./index.html");
}

///////  -----------------> reset the count of tile

function resetInventory() {
  document.querySelectorAll(".elementBox").forEach((e) => (e.textContent = 0));
}

///////  -----------------> select the tile

function handleTileClick(event) {
  let pressedTileType = event.currentTarget.getAttribute("id");

  if (document.querySelector(".selected")) {
    let selectedTool = document.querySelector(".selected");
    if (selectedTool.classList.contains("toolBox")) {
      connectTile(pressedTileType, selectedTool.getAttribute("id"));
    } else if (
      selectedTool.classList.contains("elementBox") &&
      checkInventory(selectedTool.getAttribute("id"))
    ) {
      placeTheTile(pressedTileType, selectedTool.getAttribute("id"));
    }
  }
}

///////  -----------------> select the tile

function checkInventory(tilePlace) {
  if (
    parseInt(
      document.querySelector(`[id=${tilePlace}].elementBox`).textContent
    ) > 0
  )
    return true;
  else return false;
}

function connectTile(tileMove, toolUse) {
  if (
    (tileMove === "stone" && toolUse === "hoe") ||
    ((tileMove === "wood" || tileMove === "greengold") && toolUse === "axe") ||
    ((tileMove === "land" || tileMove === "grass") && toolUse === "shovel") ||
    (tileMove === "goldgrey" && toolUse === "hoe")
  ) {
    event.currentTarget.setAttribute("id", "sky");
    addToInventory(tileMove);
  }
}

function placeTheTile(tileOut, tileIn) {
  if (tileOut === ("sky" || "cloud")) {
    removeFromInventory(tileIn);
    event.currentTarget.setAttribute("id", tileIn);
  }
}
///////  -----------------> add count to unvetory

function addToInventory(tileMove) {
  let movet = document.querySelector(`[id=${tileMove}].elementBox`);
  movet.textContent = parseInt(movet.textContent) + 1;

  if (parseInt(movet.textContent) == 5) {
    console.log("f");
  }
}
///////  -----------------> reduce count from unvetory

function removeFromInventory(tileBack) {
  let backt = document.querySelector(`[id=${tileBack}].elementBox`);
  backt.textContent = parseInt(backt.textContent) - 1;
}

function handleInventoryClick(event) {
  if (event.currentTarget.classList.contains("selected")) {
    event.currentTarget.classList.remove("selected");
  } else {
    allElements.forEach((e) => e.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
  }
}

const allElements = document.querySelectorAll(".toolbar li");

allElements.forEach((e) => {
  e.addEventListener("click", handleInventoryClick);
});

for (let row = 0; row < gameSize; row++) {
  for (let col = 0; col < gameSize; col++) {
    gameArea[row][col].addEventListener("click", handleTileClick);
  }
}

/////////////////////////////////////////
