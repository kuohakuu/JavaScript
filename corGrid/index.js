
const boxes = document.querySelectorAll(".box");
const box1 = document.querySelector(".box1");

boxes.forEach((item) => item.addEventListener("click", changeColor));

function changeColor(box) {
  if (this.getAttribute("style") === null) {
    return (this.style.backgroundColor = "black");
  } else {
    return this.removeAttribute("style");
  }
}


