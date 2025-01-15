document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los botones de eliminar
    const botonesEliminar = document.querySelectorAll('.Producto-Boton-Eliminar');

    // Añadir un evento a cada botón para eliminar el producto
    botonesEliminar.forEach(button => {
        button.addEventListener('click', function (event) {
            const producto = event.target.closest('.Producto');
            producto.remove();
        });
    });

    // Obtener los botones de "Ver más" y agregar un evento para redirigir a la página de detalles
    const botonesVerMas = document.querySelectorAll('.Producto-Boton');
    botonesVerMas.forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'detalle_producto.html'; // Cambia esta URL según sea necesario
        });
    });
});



