const navBar = document.getElementById("navBar");
const logo = document.getElementById("logo");
const navLinks = document.querySelectorAll(
  "nav .container-fluid .navbar-nav a "
);
const navBtn = document.getElementById("navBtn");
const faqSCards = document.querySelectorAll(".faqsCard");

window.addEventListener("scroll", (e) => {
  if (scrollY > 100) {
    navBar.classList.add("navOnScroll");
    logo.classList.add("imgLogoDefault");
    navLinks.forEach((link) => {
      link.classList.add("navLinkOnScroll");
    });
    navBtn.classList.remove("navLinkOnScroll");
  } else {
    navBar.classList.remove("navOnScroll");
    logo.classList.remove("imgLogoDefault");
    navLinks.forEach((link) => {
      link.classList.remove("navLinkOnScroll");
    });
  }
});

faqSCards.forEach((card) =>
  card.addEventListener("click", () => {
    const p = card.querySelector("p");
    p.classList.toggle("d-none");
    p.style.transition = "0.5s";
    console.log(p);
  })
);
