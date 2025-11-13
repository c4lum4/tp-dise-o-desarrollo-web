// ======================
//      NOVEDADES
// ======================

function mostrarNovedades() {
  const div = document.getElementById("novedades");

  if (div) {
    const novedades = [
      {
        titulo: "Nueva Colección",
        descripcion:
          "Descubrí los nuevos diseños de nuestra línea urbana. ¡Estilo y comodidad asegurados!",
        imagen: "images/novedades/post1.jpg",
        fecha: "Enero 2025",
      },
      {
        titulo: "Ofertas Especiales",
        descripcion:
          "Hasta 30% de descuento en productos seleccionados por tiempo limitado.",
        imagen: "images/novedades/post2.jpg",
        fecha: "Febrero 2025",
      },
      {
        titulo: "Nuevo Local",
        descripcion:
          "Abrimos nuestro primer local físico con showroom exclusivo.",
        imagen: "images/novedades/post3.jpg",
        fecha: "Marzo 2025",
      },
    ];

    div.innerHTML = "";

    novedades.forEach((novedad) => {
      const card = `
        <div class="news-card">
          <img src="${novedad.imagen}" alt="${novedad.titulo}" class="news-card-image">
          <div class="news-card-body">
            <h5 class="news-card-title">${novedad.titulo}</h5>
            <p class="news-card-description">${novedad.descripcion}</p>
            <p class="news-card-date">${novedad.fecha}</p>
          </div>
        </div>
      `;
      div.innerHTML += card;
    });
  }
}

// ======================
//   PRODUCTOS + CARRITO
// ======================

// Cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Actualizar contador en la navbar
function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
}

// Agregar producto al carrito
function agregarAlCarrito(titulo, precio, imagen) {
  const producto = { titulo, precio, imagen };

  carrito.push(producto);

  // Guardar carrito actualizado
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Actualizar contador
  actualizarContadorCarrito();

  // Feedback simple
  console.log(`Producto agregado: ${titulo}`);
}

// Mostrar productos destacados
function mostrarProductosDestacados() {
  const div = document.getElementById("productos");

  if (div) {
    const productos = [
      {
        titulo: "Remera Oversize",
        descripcion: "Cómoda y moderna para tu día a día.",
        imagen: "images/producto1.jpg",
        precio: "$12.000",
      },
      {
        titulo: "Buzo Canguro",
        descripcion: "Perfecto para días frescos y relajados.",
        imagen: "images/producto2.jpg",
        precio: "$18.500",
      },
      {
        titulo: "Jogging Urban",
        descripcion: "Estilo urbano con máxima comodidad.",
        imagen: "images/producto3.jpg",
        precio: "$16.500",
      },
    ];

    div.innerHTML = "";

    productos.forEach((producto) => {
      const card = `
        <div class="product-card">
          <img src="${producto.imagen}" alt="${producto.titulo}" class="product-card-image">
          <div class="product-card-body">
            <h5 class="product-card-title">${producto.titulo}</h5>
            <p class="product-card-description">${producto.descripcion}</p>
            <p class="product-card-price">${producto.precio}</p>

            <!-- BOTÓN AGREGAR -->
            <button class="btn-agregar"
              onclick="agregarAlCarrito('${producto.titulo}', '${producto.precio}', '${producto.imagen}')">
              Agregar al carrito
            </button>
          </div>
        </div>
      `;
      div.innerHTML += card;
    });
  }
}

// ======================
//     EJECUCIÓN INICIAL
// ======================

document.addEventListener("DOMContentLoaded", () => {
  mostrarNovedades();
  mostrarProductosDestacados();
  actualizarContadorCarrito(); // contador del carrito
});