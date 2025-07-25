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
