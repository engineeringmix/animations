// scroll-animations.js

document.addEventListener("DOMContentLoaded", function () {
  // Helper function to apply Intersection Observer
  function applyObserver(elements, options, onEnter, onExit) {
    elements.forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            onEnter(entry.target);
          } else {
            onExit(entry.target);
          }
        });
      }, options);

      observer.observe(el);
    });
  }

  // Hero section fade-out
  const heroContainer = document.querySelector('.hero-section[data-type="type-2"] > [class*="ct-container"]');
  if (heroContainer) {
    applyObserver([heroContainer], { threshold: 0.5 },
      target => target.style.opacity = 1,
      target => target.style.opacity = 0
    );
  }

  // Header image animation for single blog post
  const headerImages = document.querySelectorAll('[data-prefix="single_blog_post"] .hero-section[data-type="type-2"]');
  applyObserver(headerImages, { threshold: 0.7 },
    target => {
      target.style.opacity = 1;
      target.style.transform = 'scale(1)';
    },
    target => {
      target.style.opacity = 0;
      target.style.transform = 'scale(0)';
    }
  );

  // Fade-in animation for Gutenberg images
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
          img.style.opacity = 0;
          img.style.transform = 'translateY(20px) scale(0.8)';
        }
      });
    }, { rootMargin: '-100px 0px 0px 0px' });

    observer.observe(img);
  });
});
