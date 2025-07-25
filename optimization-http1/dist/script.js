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
// app2.js - Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Add active state animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });

  // Active link highlighting based on scroll position
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + 100;

    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const sectionTop = targetSection.offsetTop;
        const sectionBottom = sectionTop + targetSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  console.log('App2.js: Navigation system initialized');
});
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
// app4.js - Performance monitoring and stats
document.addEventListener('DOMContentLoaded', function () {
  // Performance monitoring
  const performanceData = {
    loadTime: 0,
    resourceCount: 0,
    totalSize: 0,
  };

  // Measure page load time
  window.addEventListener('load', function () {
    const loadTime = performance.now();
    performanceData.loadTime = Math.round(loadTime);

    // Count resources
    const resources = performance.getEntriesByType('resource');
    performanceData.resourceCount = resources.length;

    // Calculate total transfer size (approximation)
    performanceData.totalSize = resources.reduce((total, resource) => {
      return total + (resource.transferSize || 0);
    }, 0);

    console.log('Performance Data:', performanceData);

    // Update stats display if elements exist
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
      statNumbers[0].textContent = performanceData.resourceCount + ' Resources';
      statNumbers[1].textContent =
        Math.round(performanceData.totalSize / 1024) + ' KB';
      statNumbers[2].textContent = performanceData.loadTime + ' ms';
    }
  });

  // CTA Button click tracking
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      const clickTime = performance.now();
      console.log('CTA clicked at:', Math.round(clickTime), 'ms');

      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  }

  // Resource timing analysis
  setTimeout(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      console.log('Navigation Timing:', {
        domContentLoaded: Math.round(
          navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart
        ),
        loadComplete: Math.round(
          navigation.loadEventEnd - navigation.loadEventStart
        ),
        totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      });
    }
  }, 1000);

  console.log('App4.js: Performance monitoring initialized');
});
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
