const sliderLeftBtn = document.querySelector("#left-button");
const sliderRightBtn = document.querySelector("#right-button");

const cardsSwiper = new Swiper(".cards-swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 28,
  enabled: true,
  speed: 500,

  rewind: true,

  breakpoints: {
    769: {
      enabled: true,
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 28,
    },
    1230: {
      enabled: false,
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 28,
    },
  },

  on: {
    breakpoint(swiper) {
      if (!swiper.enabled) {
        swiper.wrapperEl.style.transform = "translate3d(0,0,0)";
      }
    },
  },
});

function showTemporaryOpacity(button) {
  if (!button) return;

  button.classList.add("opacity-30");

  setTimeout(() => {
    button.classList.remove("opacity-30");
  }, 300);
}

function moveRight() {
  if (!cardsSwiper.enabled) return;

  cardsSwiper.slideNext();

  showTemporaryOpacity(sliderRightBtn);
  sliderLeftBtn?.classList.remove("opacity-30");
}

function moveLeft() {
  if (!cardsSwiper.enabled) return;

  cardsSwiper.slidePrev();

  showTemporaryOpacity(sliderLeftBtn);
  sliderRightBtn?.classList.remove("opacity-30");
}

window.moveRight = moveRight;
window.moveLeft = moveLeft;

// show bio and hide bio

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const showBtn = card.querySelector(".show-btn");
  const bio = card.querySelector(".bio");
  const bioText = card.querySelector(".text-bio");
  const verticalIcon = card.querySelector(".plus-vertical");

  showBtn.addEventListener("click", () => {
    const isOpen = bio.classList.contains("visible");

    bio.classList.toggle("top-0");
    bio.classList.toggle("top-full");

    bio.classList.toggle("opacity-100");
    bio.classList.toggle("opacity-0");

    bio.classList.toggle("visible");
    bio.classList.toggle("invisible");

    bio.classList.toggle("translate-y-0");
    bio.classList.toggle("translate-y-5");

    bioText.textContent = !isOpen ? "HIDE BIO" : "SHOW BIO";

    verticalIcon.classList.toggle("opacity-0", !isOpen);

    if (!isOpen) {
      showBtn.classList.remove("bg-dark-peach");
      showBtn.classList.add("bg-peach");
    } else {
      showBtn.classList.remove("bg-peach");
      showBtn.classList.add("bg-dark-peach");
    }
  });
});