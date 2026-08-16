/* =========================================================
   Al Mazeen Gutter LTD — Site scripts
   Mobile nav toggle, scroll reveal, footer year
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  initScrollReveal();
  initFooterYear();
});

/* ---------- Mobile nav toggle ---------- */
function initNavToggle() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Scroll reveal for sections ---------- */
function initScrollReveal() {
  var targets = document.querySelectorAll(
    ".service-card, .split-copy, .split-media, .area-list li, .contact-tile, .section-intro-center, .check-list-center, .section h2"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) { observer.observe(el); });
}

/* ---------- Footer year ---------- */
function initFooterYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}
