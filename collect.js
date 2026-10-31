
document.addEventListener('DOMContentLoaded', () => {
   const featuredImage = document.getElementById("featured-image");
   const buttons = document.querySelectorAll("ul button");
   const thumbnails = document.querySelectorAll(".thumbnail");

   buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
         const img = thumbnails[index];

         // Update featured image
         featuredImage.src = img.src;
         featuredImage.alt = img.alt;

         // Reset active state
         thumbnails.forEach(i => i.classList.remove("border-b-2", "border-black", "dark:border-white"));
         buttons.forEach(btn => btn.setAttribute("aria-selected", "false"));

         // Set active state
         img.classList.add("border-b-2", "border-black", "dark:border-white");
         button.setAttribute("aria-selected", "true");
      });
   });
});
