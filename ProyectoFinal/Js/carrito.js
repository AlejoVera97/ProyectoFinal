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