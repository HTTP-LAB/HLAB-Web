// app5.js - UI interactions and theme management
document.addEventListener('DOMContentLoaded', function () {
  // Dynamic color theme adjustments
  const themeColors = {
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    accent: '#2563eb',
  };

  // Apply dynamic theme colors
  function applyThemeColors() {
    document.documentElement.style.setProperty(
      '--primary-color',
      themeColors.primary
    );
    document.documentElement.style.setProperty(
      '--secondary-color',
      themeColors.secondary
    );
    document.documentElement.style.setProperty(
      '--accent-color',
      themeColors.accent
    );
  }

  applyThemeColors();

  // Parallax effect for background elements
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    const introSection = document.querySelector('.intro-section');
    if (introSection) {
      introSection.style.transform = `translateY(${rate}px)`;
    }
  });

  // Interactive elements animation
  const interactiveElements = document.querySelectorAll(
    '.cta-button, .feature-card, .nav-menu a'
  );

  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Footer animation on scroll
  const footer = document.querySelector('.footer');
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideInUp 0.8s ease-out';
        }
      });
    },
    { threshold: 0.1 }
  );

  if (footer) {
    footerObserver.observe(footer);
  }

  // Add CSS animation keyframes dynamically
  const style = document.createElement('style');
  style.textContent = `
        @keyframes slideInUp {
            from {
                transform: translateY(30px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .nav-menu a.active {
            background-color: rgba(255, 255, 255, 0.2);
            color: #e0f2fe;
        }
    `;
  document.head.appendChild(style);

  // Random image loading simulation for testing
  const testImages = document.querySelectorAll('img');
  testImages.forEach((img, index) => {
    // Add loading states
    img.addEventListener('loadstart', function () {
      this.style.filter = 'blur(2px)';
    });

    img.addEventListener('load', function () {
      this.style.filter = 'blur(0px)';
      this.style.transition = 'filter 0.3s ease';
    });
  });

  // Resource loading simulation
  setTimeout(() => {
    console.log('All resources loaded - App5.js ready');
    document.body.classList.add('fully-loaded');
  }, 2000);

  console.log('App5.js: UI interactions and theme initialized');
});
