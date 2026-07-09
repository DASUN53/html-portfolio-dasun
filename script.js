// Back to top button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "10px 0";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else {
    navbar.style.padding = "15px 0";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".skill-item, .project-card, .timeline-item",
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize elements with opacity 0 for animation
document
  .querySelectorAll(".skill-item, .project-card, .timeline-item")
  .forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.5s ease";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
