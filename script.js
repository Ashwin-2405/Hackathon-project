function changeMessage() {
  const greeting = document.getElementById("greeting");
  greeting.innerText = "You're doing amazing! 🎯 Keep going!";
}
const colors = ["#f5f5f5", "#ffd6e0", "#c3f0ca", "#ffecd1", "#d0e8f2", "#fce38a"];

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;

  console.log("Background changed to:", randomColor);
}
