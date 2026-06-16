/**
 * PueblAI — main.js
 * Scroll behavior, nav, language toggle, WhatsApp float, form handling
 */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────
     1. STICKY NAV — add 'scrolled' class after 80px
  ────────────────────────────────────────────── */
  const nav = document.querySelector('.site-nav');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load


  /* ──────────────────────────────────────────────
     2. FADE-IN ON SCROLL — IntersectionObserver
  ────────────────────────────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all elements immediately when JS runs without IO support
    fadeEls.forEach((el) => el.classList.add('visible'));
  }


  /* ──────────────────────────────────────────────
     3. LANGUAGE TOGGLE
     Toggles html[lang] between 'es' and 'en'
     Swaps textContent on all [data-es] / [data-en] elements
  ────────────────────────────────────────────── */
  const langBtn = document.getElementById('lang-toggle');
  let currentLang = document.documentElement.lang || 'es';

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    currentLang = lang;

    // Update all bilingual elements
    const bilingualEls = document.querySelectorAll('[data-es]');
    bilingualEls.forEach((el) => {
      const text = el.getAttribute('data-' + lang);
      if (text !== null) {
        el.textContent = text;
      }
    });

    // Update button label
    if (langBtn) {
      langBtn.textContent = lang === 'es' ? 'ES | EN' : 'EN | ES';
      langBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }

    // Persist preference
    try {
      localStorage.setItem('pueblai-lang', lang);
    } catch (e) {
      // localStorage may not be available in all contexts
    }
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(newLang);
    });
  }

  // Restore saved preference on load
  try {
    const saved = localStorage.getItem('pueblai-lang');
    if (saved && saved !== 'es') {
      applyLanguage(saved);
    }
  } catch (e) {
    // ignore
  }


  /* ──────────────────────────────────────────────
     4. SMOOTH SCROLL — all anchor links
  ────────────────────────────────────────────── */
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    // Close mobile overlay if open
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';

    const navHeight = nav ? nav.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({ top, behavior: 'smooth' });
  });


  /* ──────────────────────────────────────────────
     5. MOBILE HAMBURGER — toggle overlay
  ────────────────────────────────────────────── */
  const hamburger  = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay') || { classList: { remove: () => {} } };
  const closeBtn   = document.querySelector('.close-overlay');

  function openOverlay() {
    if (!navOverlay.classList) return;
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay() {
    if (!navOverlay.classList) return;
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', openOverlay);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeOverlay);
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOverlay();
  });


  /* ──────────────────────────────────────────────
     6. CONTACT FORM — inline success, basic validation
  ────────────────────────────────────────────── */
  const contactForm = document.querySelector('.contact-form');
  const formSuccess = document.querySelector('.form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous errors
      contactForm.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));

      // Validate required fields
      let valid = true;
      contactForm.querySelectorAll('[required]').forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      if (!valid) {
        // Focus first error
        const firstErr = contactForm.querySelector('.error');
        if (firstErr) firstErr.focus();
        return;
      }

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = currentLang === 'es' ? 'Enviando…' : 'Sending…';

      fetch('https://formspree.io/f/mpqybaeb', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
      .then(res => {
        btn.disabled = false;
        btn.textContent = originalText;
        if (res.ok) {
          contactForm.reset();
          if (formSuccess) {
            formSuccess.classList.add('visible');
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            setTimeout(() => formSuccess.classList.remove('visible'), 6000);
          }
        } else {
          alert(currentLang === 'es'
            ? 'Hubo un error al enviar. Escríbenos a iaenpuebla@gmail.com'
            : 'There was an error. Please email us at iaenpuebla@gmail.com');
        }
      })
      .catch(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        alert(currentLang === 'es'
          ? 'Sin conexión. Escríbenos a iaenpuebla@gmail.com'
          : 'No connection. Please email us at iaenpuebla@gmail.com');
      });
    });

    // Remove error state on input
    contactForm.addEventListener('input', (e) => {
      if (e.target.classList.contains('error')) {
        e.target.classList.remove('error');
      }
    });
  }


  /* ──────────────────────────────────────────────
     7. ACTIVE NAV LINK — highlight current section
  ────────────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length > 0 && navAnchors.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navAnchors.forEach((a) => {
              a.classList.toggle('active', a.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => sectionObserver.observe(s));
  }

})();
