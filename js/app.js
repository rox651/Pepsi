document.addEventListener("DOMContentLoaded", () => {
   const openNavButton = document.querySelector(".custom-header_button-menu");
   const menuNav = document.querySelector(".custom-header_nav");
   const customLoader = document.querySelector(".custom-loader");
   const titleHeroHome = document.querySelector(".hero-home_title");
   const navLinks = document.querySelectorAll(".custom-header_nav--link");

   //loading
   paceOptions = {
      ajax: true,
      document: true,
   };

   Pace.on("done", function () {
      customLoader.classList.add("hide");
      customLoader.addEventListener(
         "transitionend",
         () => {
            customLoader.remove();
         },
         { once: true }
      );

      document.body.classList.remove("overflow-active");

      if (titleHeroHome) {
         titleHeroHome.classList.add("show");
      }

      navLinks.forEach(link => link.classList.add("show"));
   });

   //header

   openNavButton.addEventListener("click", () => {
      menuNav.classList.toggle("active");
   });
});
