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



document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el formulario y el campo de texto
    const formulario = document.querySelector('.Header-Busqueda');
    const barraBusqueda = document.querySelector('.Busqueda-Barra');

    // Event listener para manejar la acción de búsqueda
    formulario.addEventListener('submit', function(evento) {
        // Prevenir el comportamiento por defecto del formulario (evitar recargar la página)
        evento.preventDefault();

        // Tomamos el valor ingresado en la barra de búsqueda
        const query = barraBusqueda.value.trim();

        if (query !== '') {
            // Redirigimos a productos.html con la query como parámetro
            window.location.href = `/ProyectoFinal/Html/productos.html?q=${encodeURIComponent(query)}`;
        } else {
            // Si la búsqueda está vacía, puedes mostrar un mensaje o hacer algo adicional
            alert('Por favor, ingrese un término de búsqueda');
        }
    });
});

