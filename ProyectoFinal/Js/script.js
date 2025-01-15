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



document.addEventListener('DOMContentLoaded', function () {
    // Obtener el ícono de agregar a favoritos
    const botonFavorito = document.getElementById('Favorito-Agregar');
    
    // Detalles del producto (esto puede venir dinámicamente desde el servidor)
    const producto = {
        nombre: "Juego de jardín",
        precio: "$350.00",
        imagen: "./Img/Muebles/JuegoJardin/Jardin2.jpg",
    };

    // Evento de clic para agregar a favoritos
    botonFavorito.addEventListener('click', function () {
        // Obtener los favoritos del localStorage
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

        // Agregar el producto a la lista de favoritos
        favoritos.push(producto);

        // Guardar los favoritos en localStorage
        localStorage.setItem('favoritos', JSON.stringify(favoritos));

        // Redirigir al usuario a la página de favoritos
        window.location.href = 'favorites.html';
    });
});

