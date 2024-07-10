"use strict";

var counter = 0;
var burgerMenu = document.querySelector(".burger-menu");

function f() {
  counter++;

  if (counter % 2 === 0) {
    burgerMenu.style.display = "none";
  } else {
    burgerMenu.style.display = "block";
  }
}
//# sourceMappingURL=script.dev.js.map
