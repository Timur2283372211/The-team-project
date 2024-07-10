let counter = 0
let burgerMenu = document.querySelector(".burger-menu");
function f() {
  counter++
    if (counter % 2 === 0) {
      burgerMenu.style.display = "none";
    } else {
      burgerMenu.style.display = "block";
    }
  }
