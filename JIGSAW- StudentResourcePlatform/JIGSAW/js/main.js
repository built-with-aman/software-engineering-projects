/* ============================================================================
   JIGSAW — main.js
   Site-wide behaviour that every page depends on: navbar interactions,
   theme persistence, scroll-triggered reveals, and the back-to-top control.
   Kept framework-free and split by responsibility so each block below can
   be read (and modified) independently.
   ============================================================================ */

/* ----------------------------------------------------------------------
   Mobile navbar toggle
   The hamburger only needs to flip a couple of classes — the actual
   layout change for the open state lives in responsive.css, not here,
   so JS stays purely about state rather than styling.
   ---------------------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const navbar = document.getElementById('siteNavbar');

  if (!toggle || !navbar) return;

  toggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu automatically once a link is chosen — leaving
  // it open after navigation is a common source of confusion on return.
  navbar.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('is-open');
      toggle.classList.remove('is-open');
    });
  });
}

/* ----------------------------------------------------------------------
   Search panel toggle
   ---------------------------------------------------------------------- */
function initSearchPanel() {
  const searchBtn = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');

  if (!searchBtn || !searchPanel) return;

  searchBtn.addEventListener('click', () => {
    const isOpen = searchPanel.classList.toggle('is-open');
    if (isOpen) {
      const input = searchPanel.querySelector('input');
      if (input) input.focus();
    }
  });

  // A search bar that can't be dismissed without submitting feels broken —
  // Escape should always back a user out of an overlay like this one.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') searchPanel.classList.remove('is-open');
  });
}

/* ----------------------------------------------------------------------
   Dark / light theme toggle
   Preference is stored in localStorage so it survives across pages and
   repeat visits — re-asking every load would defeat the point of a toggle.
   ---------------------------------------------------------------------- */
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'jigsaw-theme';

  const applyTheme = (theme) => {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  };

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) applyTheme(saved);

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    applyTheme(next === 'light' ? 'light' : null);
    localStorage.setItem(STORAGE_KEY, next);
  });
}

/* ----------------------------------------------------------------------
   Active navigation highlighting
   Compares each nav link's href against the current file name rather than
   the full path, so the same header markup works whether the site is
   opened from a root index.html or from within /pages/.
   ---------------------------------------------------------------------- */
function initActiveNav() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.classList.add('active');
    }
  });
}

/* ----------------------------------------------------------------------
   Scroll-triggered reveal animations
   Using IntersectionObserver instead of a scroll listener avoids firing
   layout work on every scroll frame — the browser only notifies us when
   an element's visibility actually changes.
   ---------------------------------------------------------------------- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------------------------
   Back to top button
   ---------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 480);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ----------------------------------------------------------------------
   FAQ accordion
   Only one answer needs to be open at a time on a marketing-style FAQ —
   opening a new one closes the last, which keeps the page from growing
   unmanageably tall as a visitor works through every question.
   ---------------------------------------------------------------------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (items.length === 0) return;

  items.forEach(item => {
    const summary = item.querySelector('summary');
    if (!summary) return;

    summary.addEventListener('click', () => {
      items.forEach(other => {
        if (other !== item) other.removeAttribute('open');
      });
    });
  });
}

/* ----------------------------------------------------------------------
   Newsletter form (front-end only in this static build)
   In production this would POST to a backend endpoint that inserts into
   a `newsletter_subscribers` table — here it confirms locally so the
   interaction still feels complete during a demo or interview walkthrough.
   ---------------------------------------------------------------------- */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const note = form.parentElement.querySelector('.newsletter-note');
    if (!input || !input.value) return;

    if (note) {
      const original = note.textContent;
      note.textContent = `Subscribed — updates will be sent to ${input.value}`;
      note.style.color = 'var(--color-success)';
      setTimeout(() => {
        note.textContent = original;
        note.style.color = '';
      }, 4000);
    }
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initSearchPanel();
  initThemeToggle();
  initActiveNav();
  initScrollReveal();
  initBackToTop();
  initFaqAccordion();
  initNewsletterForm();
});
