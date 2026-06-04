const button = document.querySelector(".back-to-top");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const offScreenMenuLinks = document.querySelectorAll(".off-screen-menu a");
const emailButton = document.getElementById("email-btn");

function setMobileMenuOpen(isOpen) {
   if (!hamMenu || !offScreenMenu) return;

   hamMenu.classList.toggle("active", isOpen);
   offScreenMenu.classList.toggle("active", isOpen);
   hamMenu.setAttribute("aria-expanded", String(isOpen));
   hamMenu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

window.addEventListener("scroll", () => {
   if (window.scrollY > 700) {
      button.style.display = "flex";

      void button.offsetWidth;
      button.classList.add("show");
   } else {
      button.classList.remove("show");
   }
});

button.addEventListener("transitionend", (e) => {
   if (!button.classList.contains("show")) {
      button.style.display = "none";
   }
});

window.addEventListener("resize", () => {
   const currentWidth = window.innerWidth;

   if (currentWidth > 768 && hamMenu) {
      setMobileMenuOpen(false);
   }
});

hamMenu.addEventListener("click", () => {
   const isOpen = !hamMenu.classList.contains("active");
   setMobileMenuOpen(isOpen);
});

offScreenMenuLinks.forEach((link) => {
   link.addEventListener("click", () => {
      setMobileMenuOpen(false);
   });
});

emailButton.addEventListener("click", () => {
   const email = "mbportuguez2@gmail.com";
   window.location.href = `mailto:${email}`;
});
