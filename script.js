// script.js

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.fade-in');

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 1s ease-in-out";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  cards.forEach(card => {
    observer.observe(card);
  });
});
