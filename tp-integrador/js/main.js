// --- Carga dinámica de productos ---
const contenedor = document.getElementById('contenedor-productos');

if (contenedor) {
  const productos = [
    { nombre: "Remera Oversize", precio: 12000, imagen: "images/producto1.jpg" },
    { nombre: "Buzo Canguro", precio: 18500, imagen: "images/producto2.jpg" },
    { nombre: "Jogging Urban", precio: 16500, imagen: "images/producto3.jpg" },
  ];

  productos.forEach(p => {
    contenedor.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">Calidad premium. ¡No te lo pierdas!</p>
            <p class="fw-bold">$${p.precio.toLocaleString()}</p>
            <button class="btn btn-dark w-100">Comprar</button>
          </div>
        </div>
      </div>`;
  });
}

// --- Carga dinámica de novedades ---
const contenedorNovedades = document.getElementById('contenedor-novedades');

if (contenedorNovedades) {
  const novedades = [
    {
      titulo: "Nueva Colección Invierno 2025",
      descripcion: "Descubrí los nuevos diseños y colores de nuestra línea urbana. ¡Estilo y comodidad asegurados!",
      imagen: "images/novedades/post1.jpg",
      fecha: "Febrero 2025"
    },
    {
      titulo: "Ofertas de Temporada",
      descripcion: "Hasta 30% de descuento en productos seleccionados por tiempo limitado. ¡Aprovechá!",
      imagen: "images/novedades/post2.jpg",
      fecha: "Marzo 2025"
    },
    {
      titulo: "Nuevo Local en Palermo",
      descripcion: "Abrimos nuestro primer local físico con showroom exclusivo. ¡Te esperamos con regalos de inauguración!",
      imagen: "images/novedades/post3.jpg",
      fecha: "Abril 2025"
    }
  ];

  novedades.forEach(n => {
    contenedorNovedades.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${n.imagen}" class="card-img-top" alt="${n.titulo}">
          <div class="card-body">
            <h5 class="card-title">${n.titulo}</h5>
            <p class="card-text">${n.descripcion}</p>
          </div>
          <div class="card-footer text-muted text-end">
            ${n.fecha}
          </div>
        </div>
      </div>
    `;
  });
}
