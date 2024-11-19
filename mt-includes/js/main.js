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


    // const folderPath = "../../assets/images/projects/"; // Path to your images folder
    // const totalImages = 21; // Total number of images in the folder
    // const images = []; // Array to store image objects

    // // Loop to generate image paths
    // for (let i = totalImages; i >= 1; i--) {
    //     const img = {
    //         src: `${folderPath}media${i}.jpg`, // Thumbnail
    //         href: `${folderPath}media${i}.jpg`, // Full-size image
    //     };
    //     images.push(img);
    // }

    // // Reference to the container
    // const container = document.getElementById("image-container");

    // // Loop through the images array to create HTML structure
    // images.forEach((image) => {
    //     // Create a column div
    //     const colDiv = document.createElement("div");
    //     colDiv.className = "moto-widget moto-widget-row__column moto-cell col-xs-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto";
    //     colDiv.style.backgroundPosition = "left top";

    //     // Create the inner image widget
    //     const imageWidgetDiv = document.createElement("div");
    //     imageWidgetDiv.className = "moto-widget moto-widget-image moto-widget_with-deferred-content moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto";
    //     imageWidgetDiv.dataset.widget = "image";

    //     // Create the anchor tag
    //     const anchor = document.createElement("a");
    //     anchor.href = image.href;
    //     anchor.dataset.action = "lightbox";
    //     anchor.className = "moto-widget-image-link moto-link";

    //     // Create the image tag
    //     const img = document.createElement("img");
    //     img.dataset.src = image.src;
    //     img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0  '%3E%3C/svg%3E"; // Placeholder
    //     img.className = "moto-widget-image-picture moto-widget-deferred-content lazyload";
    //     img.alt = `Media ${image.src}`;

    //     // Append elements
    //     anchor.appendChild(img);
    //     imageWidgetDiv.appendChild(anchor);
    //     colDiv.appendChild(imageWidgetDiv);
    //     container.appendChild(colDiv);
    // });

  

console.log("main.js loaded");


