document.addEventListener("DOMContentLoaded", function () {
  // Helper function to apply Intersection Observer
  function applyObserver(elements, options, onEnter, onExit) {
    elements.forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            onEnter(entry.target); // Apply styles when entering viewport
          } else {
            onExit(entry.target); // Apply styles when exiting viewport
          }
        });
      }, options);

      observer.observe(el);
    });
  }

  // 1. Fade-out animation for hero section type 2
  const heroContainer = document.querySelector('.hero-section[data-type="type-2"] > [class*="ct-container"]');
  if (heroContainer) {
    applyObserver([heroContainer], { threshold: 0.5 }, 
      target => {
        target.style.opacity = 1; // Show when entering viewport
      },
      target => {
        target.style.opacity = 0; // Hide when exiting viewport
      }
    );
  }

  // 2. Header image animation for single blog post hero section
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

  // 3. Fade-in animation for Gutenberg images
  const gutenbergImages = document.querySelectorAll('.wp-block-image img');
  gutenbergImages.forEach(img => {
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
