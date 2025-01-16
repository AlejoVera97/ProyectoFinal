let currentSlide = 1;

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide); // Mostrar la diapositiva inicial
});

// Función para mostrar una diapositiva específica
function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Asegurarse de que el índice esté dentro del rango
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }

    // Ocultar todas las diapositivas
    slides.forEach(slide => slide.style.display = "none");

    // Desactivar todos los puntos
    dots.forEach(dot => dot.classList.remove("active"));

    // Mostrar la diapositiva actual
    slides[currentSlide - 1].style.display = "flex";

    // Activar el punto correspondiente
    dots[currentSlide - 1].classList.add("active");
}

// Función para navegar entre las diapositivas
function moveSlide(n) {
    showSlide(currentSlide = n);
}







// section madera

const slider = document.querySelector(".hover-slider-container");
let isDragging = false;
let startX, scrollLeft;

// Evento para arrastrar el slider
slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => isDragging = false);
slider.addEventListener("mouseup", () => isDragging = false);
slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad del desplazamiento
    slider.scrollLeft = scrollLeft - walk;
});
