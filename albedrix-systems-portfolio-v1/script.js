/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

}

/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */

const animatedElements = document.querySelectorAll(
  ".domain-card, .project-card, .tech-item"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");

      // Stop observing after animation
      observer.unobserve(entry.target);

    });

  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  }
);

animatedElements.forEach((element) => {
  element.classList.add("hidden");
  revealObserver.observe(element);
});
