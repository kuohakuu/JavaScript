function corpo() {
  const main = document.querySelector("main");
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.classList.add(`box${i}`);
    newDiv.addEventListener("click", changeColor);
    main.append(newDiv);
    console.log(newDiv);
  }
}

function changeColor() {
  if (this.getAttribute("style") === null) {
     (this.style.backgroundColor = "black");
  } else {
     this.removeAttribute("style");
  }
}
