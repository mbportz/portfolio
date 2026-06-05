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

function initProjectDescriptions() {
   const descriptions = document.querySelectorAll(".project-description");

   descriptions.forEach((desc) => {
      const text = desc.textContent.trim();

      desc.innerHTML = `
         <button type="button" class="project-description__toggle project-description__toggle--more" aria-expanded="false" hidden>... Read more</button>
         <span class="project-description__text">${text}</span>
         <button type="button" class="project-description__toggle project-description__toggle--less" hidden> Read less</button>
      `;

      const moreBtn = desc.querySelector(".project-description__toggle--more");
      const lessBtn = desc.querySelector(".project-description__toggle--less");

      const updateTruncation = () => {
         desc.classList.remove("is-truncated");
         moreBtn.hidden = true;
         lessBtn.hidden = true;

         if (desc.classList.contains("is-expanded")) {
            lessBtn.hidden = false;
            return;
         }

         desc.classList.add("is-truncated");

         if (desc.scrollHeight > desc.clientHeight + 1) {
            moreBtn.hidden = false;
         } else {
            desc.classList.remove("is-truncated");
         }
      };

      moreBtn.addEventListener("click", () => {
         desc.classList.add("is-expanded");
         desc.classList.remove("is-truncated");
         moreBtn.hidden = true;
         moreBtn.setAttribute("aria-expanded", "true");
         lessBtn.hidden = false;
      });

      lessBtn.addEventListener("click", () => {
         desc.classList.remove("is-expanded");
         moreBtn.setAttribute("aria-expanded", "false");
         updateTruncation();
      });

      desc._updateTruncation = updateTruncation;
      updateTruncation();
   });

   window.addEventListener("resize", () => {
      descriptions.forEach((desc) => {
         if (!desc.classList.contains("is-expanded")) {
            desc._updateTruncation();
         }
      });
   });
}

initProjectDescriptions();
