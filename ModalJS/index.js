const btnAdd = document.querySelector(".add");
let backgroundModal = document.querySelector(".modalContainer");

let btnClose = document.querySelectorAll(".close");

btnClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.contains("modal")
      ? backgroundModal.classList.remove("show")
      : btn.parentElement.remove();
  });
});

let cards = document.querySelectorAll(".cardsContainer .card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (
      !card.classList.contains("modal") &&
      !e.target.classList.contains("close")
    ) {
      console.log(e.target);
      card.classList.add("modal");
      backgroundModal.classList.add("show");
      backgroundModal.append(card);
    } else if (card.classList.contains("modal")) {
      card.classList.remove("modal");
      let cardsContainer = document.querySelector(".cardsContainer");
      cardsContainer.append(card);
      backgroundModal.classList.remove("show");
    }
  });
});
