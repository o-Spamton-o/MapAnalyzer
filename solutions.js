// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column <= 4) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level2Solution() {
  if (column <= 2) {
    tile.innerHTML = "HILLS";
  } else if (column <= 7) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level3Solution() {
  if (column <= 2 || column >= 8) {
    tile.innerHTML = "HILLS";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level4Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level5Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else if (row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level6Solution() {
  if (row <= 1 || row >= 6) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level7Solution() {
  if (column == 7 && row == 4) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level8Solution() {
  if (column == 2 || row == 5) {
    tile.innerHTML = "TREE";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level9Solution() {
  if (column >= 6 || row >= 6) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level10Solution() {
  if (column <= 1) {
    tile.innerHTML = "HILLS";
  } else if (column <= 3) {
    tile.innerHTML = "TREE";
  } else if (column <= 7) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level11Solution() {
  if (column <= 5 && row <= 3) {
    tile.innerHTML = "WATER";
  } else if (column >= 6 && row >= 4) {
    tile.innerHTML = "TREE";
  } else if (column >= 6 && row <= 3) {
    tile.innerHTML = "HILLS";
  } else if (column <= 5 && row >= 4) {
    tile.innerHTML = "SAND";
  }
}

function level12Solution() {
  if ((column <= 5 && row <= 4) || (column >= 6 && row >= 5)) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level13Solution() {
  if (column >= 4 && column <= 9 && row >= 2 && row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "TREE";
  }
}

function level14Solution() {
  if (column >= 2 && column <= 4 && row >= 1 && row <= 5) {
    tile.innerHTML = "TREE";
  } else if (column >= 7 && column <= 10 && row >= 3 && row <= 5) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}
