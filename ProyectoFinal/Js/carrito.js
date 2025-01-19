

// Función para cargar los productos del carrito en el contenedor
function cargarProductosCarrito() {
    const contenedorCarrito = document.getElementById('contenedor-carrito');

    // Obtenemos los productos del carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Si hay productos en el carrito
    if (carrito.length > 0) {
        contenedorCarrito.innerHTML = ''; // Limpiar contenedor antes de agregar nuevos productos
        carrito.forEach(producto => {
            // Crear el HTML del producto
            const productoHTML = `
            <div class="Producto-Carrito">
                <img src="${producto.imagenes[0]}" alt="${producto.nombre}" class="Producto-Imagen">
                <div class="Producto-Info">
                    <h3 class="Producto-Nombre">${producto.nombre}</h3>
                    <p class="Producto-Descripcion">${producto.descripcion}</p>
                    <div class="Producto-Precio">$${producto.precio.toFixed(2)}</div>
                    <button class="Producto-Boton-Eliminar" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
                </div>
            </div>
            `;
            contenedorCarrito.innerHTML += productoHTML;
        });
    } else {
        contenedorCarrito.innerHTML = '<p>No tienes productos en el carrito</p>';
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarProductosCarrito(); // Recargar los productos después de eliminar
}

// Llamamos a la función para cargar los productos cuando se carga la página
window.onload = cargarProductosCarrito;











// BOTones
document.addEventListener('DOMContentLoaded', function () {
    // Botones del carrito
    const btnProcederCompra = document.getElementById('proceder-compra');
    const btnVolverProductos = document.getElementById('volver-productos');
    const btnCancelarCompra = document.getElementById('cancelar-compra');

    // Acción para el botón "Proceder a la compra"
    btnProcederCompra.addEventListener('click', function () {
        // Redirigir a la página de checkout
        window.location.href = '../Html/procesoCompra.html';
    });

    // Acción para el botón "Volver a Productos"
    btnVolverProductos.addEventListener('click', function () {
        // Redirigir a la página de productos
        window.location.href = '../Html/productos.html';
    });

    // Acción para el botón "Cancelar Compra"
    btnCancelarCompra.addEventListener('click', function () {
        // Vaciar el carrito en localStorage
        localStorage.removeItem('carrito');
        // Actualizar la visualización del carrito
        const contenedorCarrito = document.getElementById('contenedor-carrito');
        contenedorCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
        document.getElementById('total-carrito').textContent = '$0.00';
        alert('El carrito ha sido vaciado.');
    });
});
