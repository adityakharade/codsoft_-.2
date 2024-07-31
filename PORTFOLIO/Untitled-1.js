// script.js

// Particles.js setup
particlesJS("particles-js", {
  particles: {
      number: { value: 500, density: { enable: true, value_area: 800 } },
      color: { value: "#00008b" }, // Dark blue color
      shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 5, opacity_min: 0.1, sync: false }
      },
      size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 80, size_min: 0.1, sync: false }
      },
      line_linked: {
          enable: true,
          distance: 150,
          color: "#00008b", // Dark blue color
          opacity: 0.4,
          width: 1
      },
      move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
      },
      modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
      }
  },
  retina_detect: true
});

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('#about, #skills, #projects, #contact');

  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  sections.forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
  });
});
