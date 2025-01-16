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




