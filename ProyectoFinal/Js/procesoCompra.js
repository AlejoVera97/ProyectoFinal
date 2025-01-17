document.getElementById("formulario-compra").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario para validación

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigoPostal = document.getElementById("codigo-postal").value;
    const tarjeta = document.getElementById("tarjeta").value;
    const fechaExpiracion = document.getElementById("fecha-expiracion").value;
    const codigoSeguridad = document.getElementById("codigo-seguridad").value;
    const metodoPago = document.getElementById("metodo-pago").value;

    // Validación simple de campos
    if (!nombre || !email || !telefono || !direccion || !ciudad || !codigoPostal || !tarjeta || !fechaExpiracion || !codigoSeguridad || !metodoPago) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Mostrar mensaje de éxito o fallo de validación
    const resumenPedido = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Dirección de envío:</strong> ${direccion}</p>
        <p><strong>Ciudad:</strong> ${ciudad}</p>
        <p><strong>Código Postal:</strong> ${codigoPostal}</p>
        <p><strong>Método de pago:</strong> ${metodoPago}</p>
        <p><strong>Tarjeta (últimos 4 dígitos):</strong> ${tarjeta.slice(-4)}</p>
    `;

    // Mostrar el resumen de la compra
    document.getElementById("resumen-pedido").innerHTML = resumenPedido;

    // Mostrar un mensaje de confirmación
    alert("¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.");

    // Aquí podrías añadir código para enviar los datos a un servidor si es necesario, por ejemplo:
    // fetch("/procesar-compra", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         nombre, email, telefono, direccion, ciudad, codigoPostal, tarjeta, fechaExpiracion, codigoSeguridad, metodoPago
    //     }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then(response => response.json()).then(data => {
    //     console.log(data);
    //     alert("Compra completada");
    // }).catch(error => {
    //     console.error("Error:", error);
    //     alert("Hubo un problema con el procesamiento de tu compra.");
    // });
});
