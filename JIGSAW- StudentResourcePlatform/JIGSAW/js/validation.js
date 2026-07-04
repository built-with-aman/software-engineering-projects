/* ============================================================================
   JIGSAW — validation.js
   Reusable validation helpers shared by every form on the platform
   (newsletter, contact, login, register, discussion). Centralizing the
   rules here means "what counts as a valid email" is answered once,
   not redefined slightly differently on every page.
   ============================================================================ */

const Validators = {
  required(value) {
    return value.trim().length > 0;
  },

  minLength(value, length) {
    return value.trim().length >= length;
  },

  email(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  },

  phone(value) {
    return /^[+]?[0-9\s-]{7,15}$/.test(value.trim());
  },

  /**
   * Password strength kept intentionally simple for a student-facing
   * platform: at least 8 characters, one letter, one number. Anything
   * stricter tends to frustrate first-time users more than it protects them.
   */
  password(value) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);
  },

  matches(value, otherValue) {
    return value === otherValue;
  }
};

/**
 * Marks a form-row valid/invalid by toggling the shared `.invalid` class
 * that style.css already knows how to display (red border + visible
 * .form-error text) — so validation logic never needs to touch styling.
 *
 * @param {HTMLElement} rowEl - the .form-row wrapper
 * @param {boolean} isValid
 */
function setRowValidity(rowEl, isValid) {
  if (!rowEl) return;
  rowEl.classList.toggle('invalid', !isValid);
}

/**
 * Generic submit handler wiring: runs a supplied validation function,
 * and only calls onSuccess once every check passes. Used identically by
 * contact.html, login.html, and register.html with different rule sets.
 *
 * @param {string} formId
 * @param {function(FormData): boolean} validateFn - returns true if valid
 * @param {function(FormData): void} onSuccess
 */
function bindFormValidation(formId, validateFn, onSuccess) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const isValid = validateFn(formData);
    if (isValid) onSuccess(formData, form);
  });
}
