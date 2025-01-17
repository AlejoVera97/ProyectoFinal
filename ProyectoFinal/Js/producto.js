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





// Cargar el archivo JSON
fetch('../Json/bd.json')
  .then(response => response.json())
  .then(data => {
    const productos = data.productos;
    
    // Función para agregar un producto al carrito
    function agregarAlCarrito(productoId) {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      
      // Buscar el producto en la base de datos
      const producto = productos.find(p => p.id === productoId);
      if (producto) {
        // Agregar el producto al carrito
        carrito.push(producto);
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
    }

    // Asociar el evento de clic para agregar productos al carrito
    document.getElementById('Carrito-Agregar').addEventListener('click', function() {
      // Cambia el id del producto de acuerdo al que el usuario haya seleccionado
      agregarAlCarrito(1); // Aquí debes poner el id del producto específico
    });
  })
  .catch(error => console.log('Error al cargar el archivo JSON: ', error));







