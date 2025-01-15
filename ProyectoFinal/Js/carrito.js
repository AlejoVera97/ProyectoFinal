document.addEventListener('DOMContentLoaded', function () {
    // Obtener los productos del carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Contenedor donde se mostrarán los productos del carrito
    const contenedorCarrito = document.getElementById('productos-carrito');
    
    // Total del carrito
    const totalCarrito = document.getElementById('total-carrito');
    
    // Función para actualizar el total
    function actualizarTotal() {
        let total = 0;
        carrito.forEach(producto => {
            total += parseFloat(producto.precio.replace('$', ''));
        });
        totalCarrito.textContent = '$' + total.toFixed(2);
    }
    
    // Función para renderizar los productos en el carrito
    function renderizarCarrito() {
        contenedorCarrito.innerHTML = '';
        
        if (carrito.length === 0) {
            contenedorCarrito.innerHTML = '<p>No tienes productos en tu carrito.</p>';
        } else {
            carrito.forEach((producto, index) => {
                const divProducto = document.createElement('div');
                divProducto.classList.add('Carrito-Producto');
                
                divProducto.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="Carrito-Producto-Imagen">
                    <div class="Carrito-Producto-Info">
                        <h4 class="Carrito-Producto-Nombre">${producto.nombre}</h4>
                        <p class="Carrito-Producto-Precio">${producto.precio}</p>
                    </div>
                    <div class="Carrito-Producto-Cantidad">
                        <input type="number" value="${producto.cantidad}" min="1" id="cantidad-${index}" class="Carrito-Producto-CantidadInput">
                        <button onclick="eliminarProducto(${index})" class="Carrito-Producto-BotonEliminar">Eliminar</button>
                    </div>
                `;
                
                contenedorCarrito.appendChild(divProducto);
            });
        }
        
        // Actualizar el total
        actualizarTotal();
    }
    
    // Función para eliminar un producto del carrito
    function eliminarProducto(index) {
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarCarrito();
    }
    
    // Actualizar el carrito y renderizarlo
    renderizarCarrito();
});
