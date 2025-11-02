const cards = document.getElementsByClassName("card");
const html = document.documentElement;
const closeBtn = document.getElementsByClassName("close-button");
const expandAll = document.getElementById("expandAll");
const collapseAll = document.getElementById("collapseAll");
const indicators = document.getElementsByClassName("indicator");

// add toggle active for each item
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// add event trigger when clicking on the close button
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function (e) {
    e.stopPropagation(); // 🚫 กัน event bubbling ไปถึง .cards
    const parent = this.parentElement;
    const isActive = parent.classList.contains("active");
    if (isActive) {
      parent.classList.remove("active");
    }
  });
}

expandAll.addEventListener("click", () => {
  for (let i = 0; i < cards.length; i++) {
    const isBeingActive = cards[i].classList.contains("active");
    if (!isBeingActive) {
      cards[i].classList.add("active");
    }
  }
});

collapseAll.addEventListener("click", () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
  }
});

const container = document.querySelector(".card-container");

container.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    // increase speed by pressing shift key (scroll)
    const speed = e.shiftKey ? 15 : 3;

    container.scrollLeft += e.deltaY * speed;
  },
  { passive: false }
);

// binding indicators to the image
for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function () {
    const isActive = cards[i].classList.contains("active");
    clearActive();
    if (!isActive) {
      cards[i].classList.add("active");
    } else if (isActive) {
      cards[i].classList.add("active");
    }
  });
}

// Clear active function (for the picture card)
function clearActive() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
  }
}
