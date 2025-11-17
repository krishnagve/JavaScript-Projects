/* =====================================================
   SAMPLE PORTFOLIO JS
   This script updates the footer year automatically and
   provides smooth-navigation behavior if needed.
===================================================== */

// Set dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

/* Optional: Smooth scroll support (already handled by CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
*/
