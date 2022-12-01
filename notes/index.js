const buttonAdd = document.querySelector(".add");
const notesPanel = document.querySelector(".actualNotes");
const form = document.querySelector("form");

// form.oninput = function (event) {
//   event.preventDefault();
//   let searchValue = document.querySelector(".search").value;
//   if (searchValue === myNotes.forEach((card) => card.title)) {
//     console.log("tem esse cara");
//   } else {
//     console.log("não tem esse cara");
//   }
// };

let myNotes = [];

buttonAdd.addEventListener("click", newNote);

function newNote() {
  if (notesPanel.children.length == 0) {
    createCard();
  } else {
    const newCard = notesPanel.querySelector(".cardNote").cloneNode(true);
    let valueTitle = document.querySelector(".titleNote").value;
    let valueDesc = document.querySelector(".descNote").value;

    newCard.querySelector("h1").textContent = valueTitle;
    newCard.querySelector("p").innerText = valueDesc;
    notesPanel.append(newCard);
    let card = createObj(valueTitle, valueDesc);
    myNotes.push(card);
  }

  clean();
}

let cards = document.querySelector(".actualNotes");

cards.onclick = function (event) {
  if (event.target.classList.contains("deletar")) {
    if (confirm("Deseja deletar o card")) {
      event.target.parentElement.remove();
    }
  }
};

function clean() {
  document.querySelector(".titleNote").value = "";
  document.querySelector(".descNote").value = "";
}

function createCard() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cardNote");

  notesPanel.append(newDiv);

  let newH1 = document.createElement("h1");
  newH1.textContent = document.querySelector(".titleNote").value;

  newDiv.append(newH1);

  let newP = document.createElement("p");
  newP.textContent = document.querySelector(".descNote").value;

  newDiv.append(newP);

  let newAncor = document.createElement("a");
  newAncor.textContent = "x";
  newAncor.classList.add("deletar");

  newDiv.append(newAncor);
}

function createObj(title, description) {
  let object = {
    title: title,
    desc: description,
  };
  return object;
}
