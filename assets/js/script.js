var button = document.querySelector("button");
function once() {
  console.log("Done.");
  alert('Click');
}
button.addEventListener("click", once);