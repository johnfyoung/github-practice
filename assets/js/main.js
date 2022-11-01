// HOOKS
var headingEl = document.querySelector("h1");
var buttonEl = document.querySelector("#thebutton");

// state
var clickCount = 0;

// Event Listeners
buttonEl.addEventListener("click", function (ev) {
  clickCount++;
  alert(clickCount + " click(s)");
});

// Main Function
function init() {
  headingEl.textContent = "This is from the Javascript file";
}

init();
