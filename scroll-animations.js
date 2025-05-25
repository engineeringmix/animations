document.addEventListener("DOMContentLoaded", function () {
  // Helper function to apply animations
  const applyFadeAnimation = (element, isVisible) => {
    if (isVisible) {
      element.style.opacity = 1;
      element.style.transform = 'scale(1)';
    } else {
      element.style.opacity = 0;
      element.style.transform = 'scale(0)';
    }
  };

  // 1. Fade-out animation for hero section type 2
  const heroContainer = document.querySelector('.hero-section[data-type="type-2"] > [class*="ct-container"]');
  if (heroContainer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        applyFadeAnimation(entry.target, entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    observer.observe(heroContainer);
  }

  // 2. Header image animation for single blog post hero section
  const headerImages = document.querySelectorAll('[data-prefix="single_blog_post"] .hero-section[data-type="type-2"]');
  headerImages.forEach(el => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        applyFadeAnimation(entry.target, entry.isIntersecting);
      });
    }, { threshold: 0.7 });

    observer.observe(el);
  });

  // 3. Fade-in animation for Gutenberg images
  document.querySelectorAll('.wp-block-image img').forEach(img => {
    img.style.opacity = 0;
    img.style.transform = 'translateY(20px) scale(0.8)';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.style.transition = 'all 0.6s ease-out';
          img.style.opacity = 1;
          img.style.transform = 'translateY(0) scale(1)';
        } else {
          img.style.opacity = 0; // Optional: Hide when not in viewport
          img.style.transform = 'translateY(20px) scale(0.8)';
        }
      });
    }, { rootMargin: '-100px 0px 0px 0px' });

    observer.observe(img);
  });
});
