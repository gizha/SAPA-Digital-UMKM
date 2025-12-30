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
