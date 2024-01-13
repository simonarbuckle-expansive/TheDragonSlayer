const gameScript = document.createElement("script");

function chooseGameMode(level) {
  gameScript.setAttribute("type", "text/javascript");
  gameScript.setAttribute("async", true);
  gameScript.setAttribute("src", `${level}.js`);
  document.body.appendChild(gameScript);
}

function easy() {
  chooseGameMode("easy");
}
function medium() {
  chooseGameMode("medium");
}
function hard() {
  chooseGameMode("hard");
}
