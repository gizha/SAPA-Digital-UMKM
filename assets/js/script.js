function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = "none");

    document.getElementById(id).style.display = "block";
}

// Default tampil
showSection("home");

// Slider otomatis
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 3000);

// Smooth scroll untuk anchor internal (termasuk back-to-top)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
