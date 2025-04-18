// Toggle responsive menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
  });
  
  // Optional: Form submission behavior (for frontend only)
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I’ll get back to you soon.');
    this.reset();
  });
  