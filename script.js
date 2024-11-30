// script.js

// Function to add the active class for fading and sliding effect
function handleScrollEffects() {
  const sections = document.querySelectorAll("section");
  const triggerHeight = window.innerHeight / 1.3;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerHeight) {
      section.classList.add("active");
    }
  });
}

// Event listener for scrolling
window.addEventListener("scroll", handleScrollEffects);

// Trigger effects on page load for visible sections
handleScrollEffects();
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.about-carousel');
  let scrollPosition = 0;

  setInterval(() => {
    scrollPosition += 300;
    if (scrollPosition >= carousel.scrollWidth) {
      scrollPosition = 0;
    }
    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }, 3000);
});
// Add scroll fade effect
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-slide");

  const observerOptions = {
      root: null, // Observe within the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible"); // Add visible class for animation
              fadeObserver.unobserve(entry.target); // Stop observing after animation
          }
      });
  }, observerOptions);

  fadeElements.forEach((element) => fadeObserver.observe(element));
});



