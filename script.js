document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });

    // Smooth Scroll to Contact Section
    const contactButton = document.querySelector(".contact-button");
    contactButton.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth",
        });
    });

    // Back to Top Button
    const backToTopButton = document.querySelector(".back-to-top");
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
