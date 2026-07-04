/* ============================================================================
   JIGSAW — search.js
   Two responsibilities:
   1. On the home page, the search bar redirects into resources.html with
      a query string, so search always lands somewhere with real filtering.
   2. On pages that list cards (resources, coursework), a reusable
      live-filter function narrows visible cards by keyword/category
      without a page reload.
   ============================================================================ */

/* ----------------------------------------------------------------------
   Home page search redirect
   The homepage itself has no card grid to filter — its job is only to
   hand the query off to the page that does.
   ---------------------------------------------------------------------- */
function initHomeSearchRedirect() {
  const form = document.getElementById('heroSearchForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const query = input ? input.value.trim() : '';
    const target = query
      ? `pages/resources.html?q=${encodeURIComponent(query)}`
      : 'pages/resources.html';
    window.location.href = target;
  });
}

/**
 * Reads a query parameter from the current URL — used so resources.html
 * can pre-fill its search box when arriving from the homepage search bar.
 */
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || '';
}

/**
 * Wires up a live filter across a set of cards. Designed to be called
 * once per listing page with that page's own data array and render
 * function, keeping this file page-agnostic.
 *
 * @param {object} config
 * @param {string} config.searchInputId
 * @param {string} config.categorySelectId - optional
 * @param {string} config.levelSelectId - optional
 * @param {Array} config.dataset - full list of items
 * @param {function(item, filters): boolean} config.matchFn
 * @param {function(Array): void} config.renderFn - re-renders the filtered list
 */
function initLiveFilter(config) {
  const searchInput = document.getElementById(config.searchInputId);
  const categorySelect = config.categorySelectId ? document.getElementById(config.categorySelectId) : null;
  const levelSelect = config.levelSelectId ? document.getElementById(config.levelSelectId) : null;

  function applyFilters() {
    const filters = {
      keyword: searchInput ? searchInput.value.trim().toLowerCase() : '',
      category: categorySelect ? categorySelect.value : '',
      level: levelSelect ? levelSelect.value : ''
    };

    const filtered = config.dataset.filter(item => config.matchFn(item, filters));
    config.renderFn(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (categorySelect) categorySelect.addEventListener('change', applyFilters);
  if (levelSelect) levelSelect.addEventListener('change', applyFilters);

  // Run once on load so a pre-filled query (from the homepage redirect)
  // filters the grid immediately instead of waiting for the first keystroke.
  applyFilters();
}

document.addEventListener('DOMContentLoaded', () => {
  initHomeSearchRedirect();
});
