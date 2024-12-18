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
  const accordion = clickedElement.closest(".accordion-closeall");
  const detailsElements = accordion.querySelectorAll("details");

  // Close all details elements except the one containing the clickedElement
  detailsElements.forEach((details) => {
    if (details !== clickedElement.parentElement) {
      details.removeAttribute("open");
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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-transition");

  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section); // Observe each section
  });
});
const folderPath = "../assets/images/projects/"; // Path to your images folder
const totalImages = 40; // Total number of images
const imagesPerPage = 8; // Number of images per page
let currentPage = 1; // Current page number
const container = document.getElementById("image-container");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const paginationContainer = document.getElementById("pagination");

// Load images dynamically
const images = [];
for (let i = totalImages; i >= 1; i--) {
  const imagePath = `${folderPath}media${i}.jpg`;

  // Create an image object
  const img = {
    src: imagePath,
    alt: `Novus Concepts Media ${i}`,
    title: `Novus Concepts Media ${i}`,
  };
  images.push(img);
}

// Display images for the current page
function displayImages() {
  container.innerHTML = ""; // Clear the container before adding new images
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = Math.min(currentPage * imagesPerPage, images.length);

  for (let i = startIndex; i < endIndex; i++) {
    const imageItem = document.createElement("div");
    imageItem.className = "image-item";

    const img = document.createElement("img");
    img.src = images[i].src; // Thumbnail image
    img.alt = images[i].alt;
    img.title = images[i].title;

    // Add click event to show lightbox
    imageItem.addEventListener("click", () => {
      // Set the lightbox image source with ascending order
      const lightboxImagePath = `${folderPath}media${totalImages - i}.jpg`; // Adjust the image path for descending order
      lightboxImg.src = lightboxImagePath;
      lightboxImg.alt = `Novus Concepts Full-size Media ${totalImages - i}`;
      lightboxImg.title = `Novus Concepts Full-size Media ${totalImages - i}`;
      lightbox.classList.remove("hidden");
      currentImageIndex = i; // Store the current image index in the lightbox
    });

    imageItem.appendChild(img);
    container.appendChild(imageItem);
  }
  updatePagination();
}

// Update pagination buttons
function updatePagination() {
  const totalPages = Math.ceil(images.length / imagesPerPage);
  paginationContainer.innerHTML = ""; // Clear the pagination

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.classList.toggle("disabled", currentPage === 1);
  prevBtn.addEventListener("click", () => changePage(currentPage - 1));
  paginationContainer.appendChild(prevBtn);

  // Pagination logic for 5 pages
  const pageNumbers = [];

  if (currentPage > 2) {
    // Add first page and ellipsis if needed
    pageNumbers.push(1);
    if (currentPage > 3) pageNumbers.push("...");
  }

  // Add the current page and one page before and after if possible
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    if (!pageNumbers.includes(i)) pageNumbers.push(i);
  }

  if (currentPage < totalPages - 1) {
    // Add ellipsis and last page if needed
    if (currentPage < totalPages - 2) pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  // Add page buttons
  pageNumbers.forEach((page) => {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = page;
    pageBtn.disabled = page === "...";
    pageBtn.classList.toggle("disabled", currentPage === page);
    if (page !== "...") {
      pageBtn.addEventListener("click", () => changePage(page));
    }
    paginationContainer.appendChild(pageBtn);
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.classList.toggle("disabled", currentPage === totalPages);
  nextBtn.addEventListener("click", () => changePage(currentPage + 1));
  paginationContainer.appendChild(nextBtn);
}

// function updatePagination() {
//   const totalPages = Math.ceil(images.length / imagesPerPage);
//   paginationContainer.innerHTML = ""; // Clear the pagination

//   const prevBtn = document.createElement("button");
//   prevBtn.textContent = "Previous";
//   prevBtn.classList.toggle("disabled", currentPage === 1);
//   prevBtn.addEventListener("click", () => changePage(currentPage - 1));
//   paginationContainer.appendChild(prevBtn);

//   for (let i = 1; i <= totalPages; i++) {
//     const pageBtn = document.createElement("button");
//     pageBtn.textContent = i;
//     pageBtn.classList.toggle("disabled", currentPage === i);
//     pageBtn.addEventListener("click", () => changePage(i));
//     paginationContainer.appendChild(pageBtn);
//   }

//   const nextBtn = document.createElement("button");
//   nextBtn.textContent = "Next";
//   nextBtn.classList.toggle("disabled", currentPage === totalPages);
//   nextBtn.addEventListener("click", () => changePage(currentPage + 1));
//   paginationContainer.appendChild(nextBtn);
// }

// Change the current page and update the displayed images
function changePage(page) {
  const totalPages = Math.ceil(images.length / imagesPerPage);
  if (page < 1 || page > totalPages) return; // Prevent out of range
  currentPage = page;
  displayImages();
}

// Close lightbox on clicking the close button
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

// Lightbox navigation (Prev/Next)
let currentImageIndex = 0;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => navigateLightbox(-1));
nextButton.addEventListener("click", () => navigateLightbox(1));

function navigateLightbox(direction) {
  currentImageIndex =
    (currentImageIndex + direction + images.length) % images.length;
  const lightboxImagePath = `${folderPath}media${
    totalImages - currentImageIndex
  }.jpg`; // Adjust for descending order
  lightboxImg.src = lightboxImagePath; // Change the lightbox image
  lightboxImg.alt = `Novus Concepts Full-size Media ${
    totalImages - currentImageIndex
  }`;
  lightboxImg.title = `Novus Concepts Full-size Media ${
    totalImages - currentImageIndex
  }`;
}

// Initial page load
displayImages();

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

console.log("main.js loaded");
