// Función para cargar los productos favoritos en el contenedor
function cargarProductosFavoritos() {
    const contenedorFavoritos = document.getElementById('contenedor-favorito');

    // Obtenemos los productos favoritos desde localStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Si hay productos favoritos
    if (favoritos.length > 0) {
        contenedorFavoritos.innerHTML = ''; // Limpiar contenedor antes de agregar nuevos productos
        favoritos.forEach(producto => {
            // Crear el HTML del producto
            const productoHTML = `
            <div class="Producto-Favorito">
                <img src="${producto.imagenes[0]}" alt="${producto.nombre}" class="Producto-Imagen">
                <div class="Producto-Info">
                    <h3 class="Producto-Nombre">${producto.nombre}</h3>
                    <p class="Producto-Descripcion">${producto.descripcion}</p>
                    <div class="Producto-Precio">$${producto.precio.toFixed(2)}</div>
                    <button class="Producto-Boton-Quitar" onclick="quitarDeFavoritos(${producto.id})">Quitar</button>
                </div>
            </div>
            `;
            contenedorFavoritos.innerHTML += productoHTML;
        });
    } else {
        contenedorFavoritos.innerHTML = '<p>No tienes productos en favoritos</p>';
    }
}

// Función para quitar un producto de favoritos
function quitarDeFavoritos(id) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(producto => producto.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    cargarProductosFavoritos(); // Recargar los productos después de eliminar
}

// Llamamos a la función para cargar los productos cuando se carga la página
window.onload = cargarProductosFavoritos;

// Función para agregar a favoritos (ya proporcionada)
function agregarAFavoritos(producto) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verificamos si el producto ya está en favoritos
    if (!favoritos.some(item => item.id === producto.id)) {
        favoritos.push(producto);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Producto agregado a favoritos');
    } else {
        alert('Este producto ya está en favoritos');
    }
}


