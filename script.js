/* ══════════════════════════════════════════
   MENU TOGGLE
══════════════════════════════════════════ */
const menuToggle = document.getElementById("menu-toggle");
const navLinks   = document.getElementById("nav-links");

// Create overlay element
const overlay = document.createElement("div");
overlay.classList.add("nav-overlay");
document.body.appendChild(overlay);

function openMenu() {
  navLinks.classList.add("active");
  menuToggle.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  navLinks.classList.remove("active");
  menuToggle.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", function () {
  if (navLinks.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close on overlay click
overlay.addEventListener("click", closeMenu);

// Close when a nav link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// Close on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeMenu();
});


/* ══════════════════════════════════════════
   EMAILJS — contact form
   Original service_id / template_id / public_key preserved
══════════════════════════════════════════ */
emailjs.init("aPRsODm15Jiooz_AC");

const contactForm = document.getElementById("contactForm");
const submitBtn   = document.getElementById("submitBtn");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Loading state
  submitBtn.classList.add("loading");
  submitBtn.querySelector(".btn-text").textContent = "Sending…";

  emailjs
    .sendForm("service_gxgvw5r", "template_kd68niz", this)
    .then(function () {
      submitBtn.querySelector(".btn-text").textContent = "✓ Message Sent!";
      submitBtn.style.background = "#00e5b0";
      submitBtn.style.color = "#0a0a0f";
      contactForm.reset();
      setTimeout(function () {
        submitBtn.querySelector(".btn-text").textContent = "Send Message";
        submitBtn.style.background = "";
        submitBtn.style.color = "";
        submitBtn.classList.remove("loading");
      }, 3500);
    })
    .catch(function (error) {
      submitBtn.querySelector(".btn-text").textContent = "Failed — Try Again";
      submitBtn.style.background = "#ff6b6b";
      console.error("EmailJS error:", error);
      setTimeout(function () {
        submitBtn.querySelector(".btn-text").textContent = "Send Message";
        submitBtn.style.background = "";
        submitBtn.classList.remove("loading");
      }, 3000);
    });
});


/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
const revealEls = document.querySelectorAll(
  ".about-grid, .about-stats, .skill-item, .project-card, .timeline-item, .contact-wrap, .stat-card"
);

revealEls.forEach(function (el) {
  el.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach(function (el) {
  revealObserver.observe(el);
});


/* ══════════════════════════════════════════
   ACTIVE NAV HIGHLIGHT ON SCROLL
══════════════════════════════════════════ */
const sections = document.querySelectorAll("section[id], header[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navItems.forEach(function (a) {
          a.style.color = "";
        });
        const active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (active) active.style.color = "#f0eff8";
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach(function (s) { sectionObserver.observe(s); });


