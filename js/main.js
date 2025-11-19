
//NOVEDADES 

const productosCatalogo = [
  {
    id: "remera-oversize",
    titulo: "Blazer Minimal",
    descripcion: "Saco estructurado con corte urbano y liviano.",
    imagen: "images/producto1.png",
    precio: "$12.000",
  },
  {
    id: "buzo-canguro",
    titulo: "Vestido Aurora",
    descripcion: "Vestido midi con vuelo suave y textura satinada.",
    imagen: "images/producto2.png",
    precio: "$18.500",
  },
  {
    id: "jogging-urban",
    titulo: "Campera Polar Nube",
    descripcion: "Abrigo polar premium para climas fríos.",
    imagen: "images/producto3.png",
    precio: "$16.500",
  },
];

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

//PRODUCTOS + CARRITO

function normalizarCarrito(data) {
  if (!Array.isArray(data)) return [];

  return data.reduce((acc, item) => {
    if (!item || (!item.titulo && !item.id)) return acc;

    const safeId =
      item.id || generarIdDesdeTitulo(item.titulo) || crypto.randomUUID();

    const existente = acc.find((prod) => prod.id === safeId);
    const cantidad = Number(item.cantidad) > 0 ? Number(item.cantidad) : 1;

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      acc.push({
        id: safeId,
        titulo: item.titulo,
        precio: item.precio,
        imagen: item.imagen,
        cantidad,
      });
    }

    return acc;
  }, []);
}

function generarIdDesdeTitulo(titulo) {
  if (!titulo) return null;
  return titulo
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

let carrito = normalizarCarrito(JSON.parse(localStorage.getItem("carrito")) || []);

function obtenerCantidadProducto(id) {
  const producto = carrito.find((item) => item.id === id);
  return producto ? producto.cantidad : 0;
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contador.textContent = total;
  }
}

function actualizarBadgeProducto(id) {
  const badge = document.getElementById(`cantidad-${id}`);
  if (badge) {
    badge.textContent = obtenerCantidadProducto(id);
  }
}

function modificarCantidadProducto(id, delta, fallbackData) {
  const productoData =
    fallbackData || productosCatalogo.find((product) => product.id === id);
  if (!productoData) return;

  const existente = carrito.find((item) => item.id === id);

  if (delta > 0) {
    if (existente) {
      existente.cantidad += delta;
    } else {
      carrito.push({
        id,
        titulo: productoData.titulo,
        precio: productoData.precio,
        imagen: productoData.imagen,
        cantidad: delta,
      });
    }
  } else if (existente) {
    existente.cantidad = Math.max(0, existente.cantidad + delta);
    if (existente.cantidad === 0) {
      carrito = carrito.filter((item) => item.id !== id);
    }
  }

  guardarCarrito();
  actualizarContadorCarrito();
  actualizarBadgeProducto(id);
}

function incrementarProducto(id) {
  modificarCantidadProducto(id, 1);
}

function disminuirProducto(id) {
  modificarCantidadProducto(id, -1);
}

function agregarAlCarrito(titulo, precio, imagen) {
  const producto =
    productosCatalogo.find((item) => item.titulo === titulo) || {
      id: generarIdDesdeTitulo(titulo),
      titulo,
      precio,
      imagen,
    };

  modificarCantidadProducto(producto.id, 1, producto);

  console.log(`Producto agregado: ${titulo}`);
}

// Mostrar productos destacados
function mostrarProductosDestacados() {
  const div = document.getElementById("productos");

  if (div) {
    div.innerHTML = "";

    productosCatalogo.forEach((producto) => {
      const cantidadSeleccionada = obtenerCantidadProducto(producto.id);

      const card = `
        <div class="product-card">
          <div class="product-card-media">
            <img src="${producto.imagen}" alt="${producto.titulo}" class="product-card-image">
          </div>
          <div class="product-card-body">
            <h5 class="product-card-title">${producto.titulo}</h5>
            <p class="product-card-description">${producto.descripcion}</p>
            <div class="product-card-price-row">
              <p class="product-card-price">${producto.precio}</p>
              <span class="product-card-shipping">Envío 48h</span>
            </div>
            <div class="quantity-control">
              <button class="quantity-btn minus" onclick="disminuirProducto('${producto.id}')">-</button>
              <span class="quantity-value" id="cantidad-${producto.id}">${cantidadSeleccionada}</span>
              <button class="quantity-btn plus" onclick="incrementarProducto('${producto.id}')">+</button>
            </div>
            <p class="quantity-hint">Modificá la cantidad sin salir del catálogo.</p>
          </div>
        </div>
      `;
      div.innerHTML += card;
    });
  }
}

//EJECUCIÓN INICIAL

document.addEventListener("DOMContentLoaded", () => {
  mostrarNovedades();
  mostrarProductosDestacados();
  actualizarContadorCarrito();
});