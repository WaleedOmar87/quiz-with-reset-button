const initCards = () => {
  let results = [];
  const containers = document.querySelectorAll(".cards-container");
  const switchCards = (container, index, reset = false) => {
    if (reset) {
      let firstCard = container.querySelector(`.cards .card:nth-child(1)`);

      let resultCard = container.querySelector(".result-card");

      resultCard.classList.remove("active");
      resultCard.classList.add("hidden");

      firstCard.classList.add("active");
      firstCard.classList.remove("hidden");
      return;
    }
    let currentCard = container.querySelector(
      `.cards .card:nth-child(${index})`
    );
    let nextCard = container.querySelector(
      `.cards .card:nth-child(${index + 1})`
    );
    console.log(index);
    currentCard.classList.remove("active");
    if (nextCard != null) {
      nextCard.classList.add("active");
    } else {
      container.classList.add("hidden");
    }
  };
  const resetCards = (container) => {
    let resetButton = container.querySelector(".reset-button");
    resetButton != null &&
      resetButton.addEventListener("click", (e) => {
        switchCards(container, 1, true);
      });
  };
  const switchSelectedItem = (card, items, item) => {};
  containers.forEach((cardContainer) => {
    let cardIndex = 1;
    let cards = cardContainer.querySelectorAll(".cards .card");
    cards.forEach((card) => {
      let items = card.querySelectorAll(".list-group-item");
      items.forEach((item, index) => {
        item.addEventListener("click", (e) => {
          switchSelectedItem(card, items, item);
          results.push(index);
          switchCards(cardContainer, cardIndex);
          if (cardIndex >= cards.length) {
            cardIndex = 1;
          } else {
            cardIndex++;
          }
        });
      });
    });
    resetCards(cardContainer);
  });
};
initCards();
