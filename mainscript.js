
    // This code will only run on desktop screens (> 768px)

if (window.innerWidth > 768) {
   
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const cardContainer = document.getElementById("cardContainer");
  let cards = Array.from(cardContainer.querySelectorAll(".cards"));

  function updateCenterCard() {
    cards.forEach(card => card.classList.remove("center-card"));
    cards[1].classList.add("center-card"); // always 2nd card is center
  }

  // Initial setup
  updateCenterCard();

  // LEFT ARROW CLICK
  leftArrow.addEventListener("click", () => {
   // swap kra hai cards arrays ko 
    cards = [cards[1], cards[2], cards[0]];
    cardContainer.innerHTML = "";
    cards.forEach(card => cardContainer.appendChild(card));
    updateCenterCard();
  });

  // RIGHT ARROW CLICK
  rightArrow.addEventListener("click", () => {
    // Swap kra hai card arrays ko 
    cards = [cards[2], cards[0], cards[1]];
    cardContainer.innerHTML = "";
    cards.forEach(card => cardContainer.appendChild(card));
    updateCenterCard();
  });
    
}
  

// This code will only run on mobile screens (<= 768px)

if (window.innerWidth <= 768) {
   
   const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const cardContainer = document.getElementById("cardContainer");
let cards = Array.from(cardContainer.querySelectorAll(".cards"));

let currentIndex = 0;

// This function will handle the card movement
function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const transformValue = -currentIndex * cardWidth;
    cardContainer.style.transform = `translateX(${transformValue}px)`;
   
    cards.forEach(card => card.classList.remove("center-card"));
    if (window.innerWidth > 768) {
        cards[currentIndex].classList.add("center-card");
    }
}

// Initial setup
updateCarousel();
    leftArrow.addEventListener("click", () => {
   // swap kra hai cards arrays ko 
    cards = [cards[1], cards[2], cards[0]];
    cardContainer.innerHTML = "";
    cards.forEach(card => cardContainer.appendChild(card));
    updateCenterCard();
  });

  // RIGHT ARROW CLICK
  rightArrow.addEventListener("click", () => {
    // Swap kra hai card arrays ko 
    cards = [cards[2], cards[0], cards[1]];
    cardContainer.innerHTML = "";
    cards.forEach(card => cardContainer.appendChild(card));
    updateCenterCard();
  });
}