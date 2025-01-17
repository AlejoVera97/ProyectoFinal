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



// Función para cargar los productos desde el archivo JSON
function cargarProductosDesdeJSON() {
    // Usamos fetch para obtener el archivo JSON
    fetch('../Json/bd.json')
        .then(response => response.json())  // Convertimos la respuesta en formato JSON
        .then(data => {
            const contenedor = document.querySelector(".Main-Grid"); // Seleccionamos el contenedor donde se van a cargar los productos

            // Iteramos sobre el array de productos (ahora dentro de "productos")
            data.productos.forEach(producto => {
                const item = document.createElement('div');
                item.classList.add("Main-Grid-Item");

                // HTML del producto usando los datos del JSON
                item.innerHTML = `
                    <img class="Main-Grid-Img" src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="Main-Grid-Info">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <div class="Main-Grid-Precio">
                            <span>$${producto.precio.toFixed(2)}</span>
                        </div>
                        <div class="Main-Grid-Stock">
                            <span>Stock: ${producto.stock}</span>
                        </div>
                    </div>
                    <button class="Slider-Btn-Anterior">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <button class="Slider-Btn-Siguiente">
                <span class="material-symbols-outlined">arrow_forward</span>
            </button>
                    <div class="Main-Grid-Iconos">
                        <div class="Main-Grid-Favorito" id="Favorito-Agregar">
                            <a href="../Html/favorito.html">
                                <span class="material-symbols-outlined">star</span>
                            </a>
                        </div>
                        <div class="Main-Grid-Carrito" id="Carrito-Agregar">
                            <a href="../Html/carrito.html">
                                <span class="material-symbols-outlined">shopping_cart</span>
                            </a>
                        </div>
                    </div>
                `;

                // Insertamos el producto en el contenedor
                contenedor.appendChild(item);
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));  // Manejamos errores en caso de que no se pueda cargar el JSON
}

// Llamamos a la función para cargar los productos
cargarProductosDesdeJSON();







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
