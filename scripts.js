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
   const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
   ).matches;

   const getCollapsedHeight = (desc) => {
      const lineHeight = parseFloat(getComputedStyle(desc).lineHeight);
      const lines = parseInt(getComputedStyle(desc).getPropertyValue("--desc-lines"), 10) || 2;
      return lineHeight * lines;
   };

   const onHeightTransitionEnd = (desc, callback) => {
      const handler = (event) => {
         if (event.propertyName !== "max-height") return;
         desc.removeEventListener("transitionend", handler);
         callback();
      };
      desc.addEventListener("transitionend", handler);
   };

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
         if (desc.classList.contains("is-animating")) return;

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

      const expandDescription = () => {
         if (desc.classList.contains("is-animating")) return;

         if (prefersReducedMotion) {
            desc.classList.remove("is-truncated");
            desc.classList.add("is-expanded");
            moreBtn.hidden = true;
            lessBtn.hidden = false;
            moreBtn.setAttribute("aria-expanded", "true");
            return;
         }

         const startHeight = desc.clientHeight;
         desc.classList.add("is-animating");
         desc.style.maxHeight = `${startHeight}px`;
         moreBtn.hidden = true;
         desc.classList.remove("is-truncated");
         desc.classList.add("is-expanded");

         const endHeight = desc.scrollHeight;

         requestAnimationFrame(() => {
            requestAnimationFrame(() => {
               desc.style.maxHeight = `${endHeight}px`;
            });
         });

         onHeightTransitionEnd(desc, () => {
            desc.classList.remove("is-animating");
            desc.style.maxHeight = "";
            lessBtn.hidden = false;
            moreBtn.setAttribute("aria-expanded", "true");
         });
      };

      const collapseDescription = () => {
         if (desc.classList.contains("is-animating")) return;

         if (prefersReducedMotion) {
            desc.classList.remove("is-expanded");
            moreBtn.setAttribute("aria-expanded", "false");
            updateTruncation();
            return;
         }

         const startHeight = desc.scrollHeight;
         const endHeight = getCollapsedHeight(desc);

         desc.classList.add("is-animating");
         desc.style.maxHeight = `${startHeight}px`;
         lessBtn.hidden = true;
         desc.classList.remove("is-expanded");

         requestAnimationFrame(() => {
            requestAnimationFrame(() => {
               desc.classList.add("is-truncated");
               desc.style.maxHeight = `${endHeight}px`;
            });
         });

         onHeightTransitionEnd(desc, () => {
            desc.classList.remove("is-animating");
            desc.style.maxHeight = "";
            moreBtn.setAttribute("aria-expanded", "false");
            updateTruncation();
         });
      };

      moreBtn.addEventListener("click", expandDescription);
      lessBtn.addEventListener("click", collapseDescription);

      desc._updateTruncation = updateTruncation;
      updateTruncation();
   });

   window.addEventListener("resize", () => {
      descriptions.forEach((desc) => {
         if (
            !desc.classList.contains("is-expanded") &&
            !desc.classList.contains("is-animating")
         ) {
            desc._updateTruncation();
         }
      });
   });
}

initProjectDescriptions();
