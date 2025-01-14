document.querySelectorAll('.Main-Grid-Item').forEach(item => {
    const images = item.querySelectorAll('.Main-Grid-Img');
    const btnPrev = item.querySelector('.Slider-Btn-Anterior');
    const btnNext = item.querySelector('.Slider-Btn-Siguiente');
    let currentIndex = 0;

    const updateImageVisibility = () => {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
    };

    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImageVisibility();
    });

    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImageVisibility();
    });

    // Inicializa mostrando solo la primera imagen
    updateImageVisibility();
});



// Obtén todos los botones de la clase cta-boton
const botones = document.querySelectorAll('.Cta-boton');

// Función para agregar efecto de clic
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Agregar clase 'activo' cuando se hace clic
        boton.classList.add('activo');

        // Eliminar la clase 'activo' después de 0.2 segundos
        setTimeout(() => {
            boton.classList.remove('activo');
        }, 200); // 200ms de duración
    });
});
