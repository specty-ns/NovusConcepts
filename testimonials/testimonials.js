// Wait for the DOM to fully load
$(document).ready(function () {
    const owlCarousel = $(".owl-carousel");

    // Dynamically load 14 review images
    for (let i = 1; i <= 14; i++) {
        const reviewImagePath = `../assets/images/reviews/review${i}.png`;

        // Create the review card structure
        const reviewCard = `
            <div class="owl-item">
                <div class="card">
                    <div class="testimonial mt-4 mb-2">
                        <img src="${reviewImagePath}" alt="Novus Concepts Review ${i}">
                    </div>
                </div>
            </div>
        `;
        owlCarousel.append(reviewCard);
    }

    // Initialize Owl Carousel
    owlCarousel.owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false, // Pause on hover for better user experience
        items: 1, // Default items visible
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 3 }
        },
    });
});
