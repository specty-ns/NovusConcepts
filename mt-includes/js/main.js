// document.querySelectorAll(".collapsible-btn").forEach((button) => {
//   button.addEventListener("click", () => {
//     const content = button.nextElementSibling;

//     // Close all other sections
//     document.querySelectorAll(".collapsible-content").forEach((section) => {
//       if (section !== content) {
//         section.classList.remove("open");
//         section.classList.add("closing"); // Add closing class for zoom out effect
//         section.previousElementSibling.classList.remove("active");

//         // Set timeout to remove display after transition ends
//         setTimeout(() => {
//           section.style.display = "none"; // Hide after animation
//           section.classList.remove("closing"); // Remove closing class
//         }, 300); // Match this duration with CSS transition time
//       }
//     });

//     // Toggle current section
//     button.classList.toggle("active");
//     if (content.style.display === "block") {
//       content.classList.remove("open");
//       content.classList.add("closing"); // Add closing class for zoom out effect
//       setTimeout(() => {
//         content.style.display = "none"; // Hide after animation
//         content.classList.remove("closing"); // Remove closing class
//       }, 300); // Match this duration with CSS transition time
//     } else {
//       content.style.display = "block"; // Show content
//       content.classList.add("open"); // Add open class for zoom in effect
//     }
//   });
// });

// // Open the first section by default
// document.querySelector(".collapsible-btn").click();

//this mini light JS only applies to make the close all x function

function closeAllTabs(clickedElement) {
    // Find all details elements in the same accordion
    const accordion = clickedElement.closest('.accordion-closeall');
    const detailsElements = accordion.querySelectorAll('details');
    
    // Close all details elements except the one containing the clickedElement
    detailsElements.forEach(details => {
      if (details !== clickedElement.parentElement) {
        details.removeAttribute('open');
      }
    });
  }
  

console.log("main.js loaded");
