// Toggle responsive menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});


emailjs.init("aPRsODm15Jiooz_AC");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_gxgvw5r", "template_kd68niz", this)
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset();
    })
    .catch((error) => {
      alert("Failed to send message.");
      console.log(error);
    });
});
