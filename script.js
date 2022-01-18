const playBtn = document.querySelector("#playBtn");

playBtn.addEventListener("click", toTheGame);

function toTheGame() {
  return (location.href = "./world.html");
}
