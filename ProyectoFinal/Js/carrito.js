document.addEventListener('DOMContentLoaded', function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.getElementById('productos-en-carrito');

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        carrito.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
            `;
            contenedorCarrito.appendChild(divProducto);
        });
    }
});











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
        const contenedorCarrito = document.getElementById('productos-en-carrito');
        contenedorCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
        document.getElementById('total-carrito').textContent = '$0.00';
        alert('El carrito ha sido vaciado.');
    });
});
