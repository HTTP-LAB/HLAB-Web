// app1.js - Scroll animations and section visibility
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Initial load animation for header
  setTimeout(() => {
    document.querySelector('.header').style.transform = 'translateY(0)';
    document.querySelector('.header').style.opacity = '1';
  }, 100);

  console.log('App1.js: Scroll animations initialized');
});
