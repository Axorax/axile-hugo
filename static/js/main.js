const nav = document.querySelector("nav"),
  body = document.body,
  navMoreContent = document.querySelector(".nav-more-content"),
  navMoreBtn = document.querySelector("#nav-more"),
  loader = document.querySelector(".loader");

loader.style.width = String((Math.random() * 60) | 0) + "%";

window.addEventListener(
  "load",
  () => {
    setTimeout(() => {
      loader.style.width = "100%";
    }, 10);
    setTimeout(() => {
      loader.remove();
    }, 200);
  },
  { once: true }
);

function navMenuToggle() {
  if (nav.classList.contains("mobile-active")) {
    nav.classList.remove("mobile-active");
    body.classList.remove("unscroll");
  } else {
    nav.classList.add("mobile-active");
    body.classList.add("unscroll");
  }
}

navMoreBtn.addEventListener("click", () => {
  if (navMoreContent.style.display == "flex") {
    navMoreContentClose();
  } else {
    navMoreContent.style.display = "flex";
    setTimeout(() => {
      windowEventClick(true, navMoreContentClose);
    }, 100);
  }
});

function navMoreContentClose() {
  navMoreContent.style.display = "none";
  windowEventClick(false, navMoreContentClose);
}

function windowEventClick(type, func) {
  if (type) {
    window.addEventListener("click", func);
  } else {
    window.removeEventListener("click", func);
  }
}

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (
    currentScroll > lastScroll + 10 &&
    !nav.classList.contains("scroll-down")
  ) {
    nav.classList.add("scroll-down");
    navMoreContentClose();
  }

  if (currentScroll < lastScroll && nav.classList.contains("scroll-down")) {
    nav.classList.remove("scroll-down");
  }

  lastScroll = currentScroll;
});
