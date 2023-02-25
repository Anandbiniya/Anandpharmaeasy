const labreports = tns({
  container: ".labmy-slider",
  loop: true,
  items: 1,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 10000,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 2.5,
    },
  },
});

const reviewki = tns({
  container: ".reviewmy-slider",
  loop: true,
  items: 1,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 1000,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 3,
    },
  },
});

const healthka2 = tns({
  container: ".Health-slider",
  loop: true,
  items: 1,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 400,
  autoplayButtonOutput: true,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 1,
    },

    768: {
      items: 4,
    },
  },
});

const slideproduct = tns({
  container: ".product-slider",
  loop: true,
  items: 1,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 6,
    },
  },
});

const promo = tns({
  container: ".productmy-slider",
  loop: true,
  items: 3,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 5,
    },
  },
});

const headslider = tns({
  container: ".headmy-slider",
  loop: true,
  items: 1,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 1000,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 1,
    },
  },
});
const searchInput = document.querySelector("#searchinput");
const searchValue = document.querySelector("#searchvalue");

searchInput.addEventListener("input", (event) => {
  searchInput.setAttribute("value", event.target.value);
  searchValue.textContent = event.target.value;
});
const slider = document.querySelector(".productmy-slider");
const slides = slider.querySelectorAll("img");
const controls = document.querySelector("#customize-controls");
const controlItems = [];

let currentSlide = 0;
let slideInterval;

function initSlider() {
  // Create control items
  for (let i = 0; i < slides.length; i++) {
    const control = document.createElement("li");
    control.setAttribute("data-slide", i);
    control.addEventListener("click", goToSlide);
    controls.appendChild(control);
    controlItems.push(control);
  }

  // Activate first slide
  slides[currentSlide].classList.add("active");
  controlItems[currentSlide].classList.add("active");

  // Set slide interval
  slideInterval = setInterval(nextSlide, 3000);
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function goToSlide(n) {
  clearInterval(slideInterval);
  controlItems[currentSlide].classList.remove("active");
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  controlItems[currentSlide].classList.add("active");
  slides[currentSlide].classList.add("active");
  slideInterval = setInterval(nextSlide, 3000);
}

initSlider();

const offslider = tns({
  container: ".offermy-slider",
  loop: true,
  items: 2,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 4,
    },
  },
});
// const labreports = tns({
//   container: ".labmy-slider",
//   loop: true,
//   items: 1,
//   slideBy: "page",
//   nav: false,
//   autoplay: false,
//   speed: 10000,
//   autoplayButtonOutput: false,
//   mouseDrag: true,
//   lazyload: true,
//   controlsContainer: "#customize-controls",
//   responsive: {
//     640: {
//       items: 2,
//     },

//     768: {
//       items: 2.5,
//     },
//   },
// });

const features = tns({
  container: ".Featuredmy-slider",
  loop: true,
  items: 1,
  slideBy: "page",
  nav: false,
  autoplay: false,
  speed: 10000,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: "#customize-controls",
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 5,
    },
  },
});
