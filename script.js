// Arreglo para almacenar los productos en el carrito
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Añadir el producto al carrito
    carrito.push({ nombre, precio });

    // Mostrar un mensaje de confirmación en la consola (opcional)
    console.log(`Producto añadido: ${nombre} - $${precio}`);

    // Actualizar la vista del carrito
    actualizarCarrito();
}

// Función para actualizar el carrito en la interfaz
function actualizarCarrito() {
    // Obtener el contenedor del carrito en el DOM
    const carritoDetalles = document.getElementById("carrito-detalles");
    carritoDetalles.innerHTML = ""; // Limpiar los detalles del carrito

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        carritoDetalles.innerHTML = "<p>Tu carrito está vacío.</p>";
    } else {
        // Recorrer el carrito y agregar los productos a la vista
        let total = 0;
        carrito.forEach(item => {
            const productoElemento = document.createElement("div");
            productoElemento.innerHTML = `<p>${item.nombre} - $${item.precio}</p>`;
            carritoDetalles.appendChild(productoElemento);
            total += item.precio;
        });

        // Mostrar el total del carrito
        const totalElemento = document.createElement("p");
        totalElemento.innerHTML = `Total: $${total}`;
        carritoDetalles.appendChild(totalElemento);
    }
}

// Función para mostrar los detalles del carrito al hacer clic en el botón
function verCarrito() {
    // Llamar a la función que actualiza la vista del carrito
    actualizarCarrito();
}
