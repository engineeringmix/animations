<!-- Load GSAP and ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js " defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js " defer></script>

<script>
  // Wait for GSAP and DOM to load
  window.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Hero Section Fade Out (no flicker)
      gsap.to(".hero-section[data-type='type-2'] > [class*='ct-container']", {
        opacity: 0,
        scale: 0.98, // subtle instead of sudden change
        duration: 3,
        ease: "none", // linear scrubbing
        scrollTrigger: {
          trigger: ".hero-section[data-type='type-2']",
          start: "top center",     // Start animating when top of hero hits center
          end: "bottom 10%",       // End smoothly before fully scrolled out
          scrub: true,             // Smoothly animate with scroll
          toggleActions: "play none none reverse"
        }
      });

      // Optional: Add this only if you want content to fade in first
      gsap.from(".hero-section[data-type='type-2'] .hero-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section[data-type='type-2']",
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse"
        }
      });

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
