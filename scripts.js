const button = document.querySelector(".back-to-top");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const offScreenMenuLinks = document.querySelectorAll(".off-screen-menu a");
const emailButton = document.getElementById("email-btn");

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
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
   }
});

hamMenu.addEventListener("click", () => {
   hamMenu.classList.toggle("active");
   offScreenMenu.classList.toggle("active");
});

offScreenMenuLinks.forEach((link) => {
   link.addEventListener("click", () => {
      if (hamMenu) {
         hamMenu.classList.remove("active");
         offScreenMenu.classList.remove("active");
      }
   });
});

emailButton.addEventListener("click", () => {
   const email = "mbportuguez2@gmail.com";
   window.location.href = `mailto:${email}`;
});
