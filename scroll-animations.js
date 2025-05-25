<!-- Load GSAP and ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js " defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js " defer></script>

<script>
  // Wait for GSAP and DOM to load
  window.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // 1. Hero section fade out on scroll up
      gsap.to(".hero-section[data-type='type-2'] > [class*='ct-container']", {
        opacity: 0,
        scale: 0.95,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section[data-type='type-2']",
          start: "top center",    // When top of hero hits center of viewport
          end: "bottom top",      // Ends when bottom of hero hits top of viewport
          scrub: true             // Smoothly animate as user scrolls
        }
      });

      // 2. Header image animation for single blog post
      gsap.fromTo(
        "[data-prefix='single_blog_post'] .hero-section[data-type='type-2']",
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 0.8,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "[data-prefix='single_blog_post'] .hero-section[data-type='type-2']",
            start: "top center",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 3. Fade-in animation for Gutenberg images
      document.querySelectorAll('.wp-block-image img').forEach(img => {
        gsap.from(img, {
          opacity: 0,
          y: 40,
          scale: 0.9,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      });

    } else {
      console.error("GSAP or ScrollTrigger not loaded.");
    }
  });
</script>
