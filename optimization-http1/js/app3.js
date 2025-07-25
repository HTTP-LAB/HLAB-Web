// app3.js - Image lazy loading and hover effects
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');

  // Image loading observer
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';

        img.onload = function () {
          this.style.opacity = '1';
        };

        // Simulate loading delay for performance testing
        setTimeout(() => {
          img.src = img.src;
        }, Math.random() * 100);

        imageObserver.unobserve(img);
      }
    });
  });

  // Observe all images
  images.forEach((img) => {
    imageObserver.observe(img);
  });

  // Add hover effects to feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Grid image hover effects
  const gridImages = document.querySelectorAll('.grid-image');
  gridImages.forEach((img) => {
    img.addEventListener('mouseenter', function () {
      this.style.filter = 'brightness(1.1) contrast(1.1)';
    });

    img.addEventListener('mouseleave', function () {
      this.style.filter = 'brightness(1) contrast(1)';
    });
  });

  console.log('App3.js: Image effects initialized');
});
