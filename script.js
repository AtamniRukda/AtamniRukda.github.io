// Attiq ur Rehman (CmDarri) — portfolio behavior
// Mobile nav toggle, footer year, and a light scroll-reveal.
// No frameworks, no backend, no analytics.

document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal (respects prefers-reduced-motion via CSS)
  const revealTargets = document.querySelectorAll(
    '.project, .process-step, .about-grid, .hero-grid, .section-head, .contact-inner'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in'));
  }

  // Pause other project videos when one starts playing
  const videos = document.querySelectorAll('.project-video');
  videos.forEach(v => {
    v.addEventListener('play', () => {
      videos.forEach(other => {
        if (other !== v) other.pause();
      });
    });
  });
});
