// Función para cargar los productos desde el archivo JSON
function cargarProductosDesdeJSON() {
    fetch('../Json/bd.json')
        .then(response => response.json()) // Convertimos la respuesta en formato JSON
        .then(data => {
            const contenedor = document.querySelector(".Main-Grid"); // Seleccionamos el contenedor donde se van a cargar los productos

            // Iteramos sobre el array de productos
            data.productos.forEach(producto => {
                const item = document.createElement('div');
                item.classList.add("Main-Grid-Item");

                // Crear slider de imágenes si hay múltiples
                let sliderHTML = '';
                if (producto.imagenes) {
                    producto.imagenes.forEach((imagen, index) => {
                        sliderHTML += `
                            <img class="Main-Grid-Img" src="${imagen}" alt="${producto.nombre} - Imagen ${index + 1}" style="display: ${index === 0 ? 'block' : 'none'};">
                        `;
                    });
                } else {
                    // Imagen única
                    sliderHTML = `<img class="Main-Grid-Img" src="${producto.imagen}" alt="${producto.nombre}">`;
                }

                // HTML del producto
                item.innerHTML = `
<div class="Slider">
    ${sliderHTML}
    <button class="Slider-Btn-Anterior">
        <span class="material-symbols-outlined">arrow_back</span>
    </button>
    <button class="Slider-Btn-Siguiente">
        <span class="material-symbols-outlined">arrow_forward</span>
    </button>
</div>
<div class="Main-Grid-Info">
    <div class="Main-Grid-Precio">
        <span>$${producto.precio.toFixed(2)}</span>
    </div>
    <div class="Main-Grid-Iconos">
        <div class="Main-Grid-Favorito" id="Favorito-Agregar-${producto.id}">
            <a href="javascript:void(0)">
                <span class="material-symbols-outlined">star</span>
            </a>
        </div>
      <div class="Main-Grid-Carrito" id="Carrito-Agregar-${producto.id}">
    <a href="javascript:void(0)" onclick="agregarAlCarrito(${producto.id})">
        <span class="material-symbols-outlined">shopping_cart</span>
    </a>
</div>

    </div>
</div>
`;

                // Insertamos el producto en el contenedor
                contenedor.appendChild(item);

                // Agregar eventos a los botones de favoritos y carrito
                const favoritoBtn = document.getElementById(`Favorito-Agregar-${producto.id}`);
                const carritoBtn = document.getElementById(`Carrito-Agregar-${producto.id}`);

                // Función para agregar al carrito
                carritoBtn.addEventListener('click', () => {
                    agregarAlCarrito(producto);
                   
                });

                // Función para agregar a favoritos
                favoritoBtn.addEventListener('click', () => {
                    agregarAFavoritos(producto);
                  
                });
            });

            // Inicializamos los sliders después de cargar los productos
            inicializarSliders();
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    // Obtener el producto desde los datos disponibles (JSON almacenado)
    const producto = obtenerProductoPorId(id);

    if (producto) {
        // Obtener el carrito actual desde localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Verificar si el producto ya está en el carrito
        if (!carrito.some(item => item.id === producto.id)) {
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito');
        } else {
            alert('Este producto ya está en el carrito');
        }
    }
}

// Función para obtener un producto por su ID
function obtenerProductoPorId(id) {
    const productos = JSON.parse(localStorage.getItem('productos')) || []; // JSON cargado en localStorage
    return productos.find(producto => producto.id === id);
}



// Función para agregar a favoritos
function agregarAFavoritos(producto) {
    // Obtenemos los productos favoritos desde localStorage, o un array vacío si no hay ninguno
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verificamos si el producto ya está en favoritos
    if (!favoritos.some(item => item.id === producto.id)) {
        // Agregar el producto a favoritos
        favoritos.push(producto);
        // Guardamos los favoritos actualizados en localStorage
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Producto agregado a favoritos');
    } else {
        alert('Este producto ya está en favoritos');
    }
}

// Función para inicializar sliders
function inicializarSliders() {
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
}

// Llamamos a la función para cargar los productos
cargarProductosDesdeJSON();
