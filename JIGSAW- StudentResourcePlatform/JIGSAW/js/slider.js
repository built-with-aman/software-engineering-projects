/* ============================================================================
   JIGSAW — slider.js
   A small, dependency-free carousel used for testimonials and featured
   course rails. Built around a single reusable class rather than
   page-specific code, so any new slider on future pages just needs a
   matching HTML structure — not new JavaScript.
   ============================================================================ */

class JigsawSlider {
  /**
   * @param {string} rootSelector - wrapping element containing .slider-track
   * @param {object} options - { autoplay: boolean, interval: number }
   */
  constructor(rootSelector, options = {}) {
    this.root = document.querySelector(rootSelector);
    if (!this.root) return;

    this.track = this.root.querySelector('.slider-track');
    this.slides = Array.from(this.root.querySelectorAll('.slide'));
    this.prevBtn = this.root.querySelector('.slider-prev');
    this.nextBtn = this.root.querySelector('.slider-next');
    this.dotsWrap = this.root.querySelector('.slider-dots');

    this.current = 0;
    this.autoplay = options.autoplay ?? true;
    this.interval = options.interval ?? 6000;
    this.timer = null;

    if (this.slides.length === 0) return;

    this.buildDots();
    this.bindControls();
    this.goTo(0);
    if (this.autoplay) this.startAutoplay();

    // Pausing on hover/focus keeps a slide readable while a visitor is
    // actually engaging with it, rather than cycling out from under them.
    this.root.addEventListener('mouseenter', () => this.stopAutoplay());
    this.root.addEventListener('mouseleave', () => { if (this.autoplay) this.startAutoplay(); });
  }

  buildDots() {
    if (!this.dotsWrap) return;
    this.dotsWrap.innerHTML = '';
    this.slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => this.goTo(index));
      this.dotsWrap.appendChild(dot);
    });
  }

  bindControls() {
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.goTo(this.current - 1));
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.goTo(this.current + 1));
  }

  goTo(index) {
    const total = this.slides.length;
    this.current = (index + total) % total;

    this.track.style.transform = `translateX(-${this.current * 100}%)`;

    if (this.dotsWrap) {
      Array.from(this.dotsWrap.children).forEach((dot, i) => {
        dot.classList.toggle('is-active', i === this.current);
      });
    }
  }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.goTo(this.current + 1), this.interval);
  }

  stopAutoplay() {
    if (this.timer) clearInterval(this.timer);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Only instantiated if the matching markup exists on the current page.
  if (document.querySelector('#testimonialSlider')) {
    new JigsawSlider('#testimonialSlider', { autoplay: true, interval: 7000 });
  }
});
