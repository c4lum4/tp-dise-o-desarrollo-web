// JavaScript simple para el marketplace

// Cargar productos en la página de productos
function cargarProductos() {
    const contenedor = document.getElementById('contenedor-productos');
    
    if (contenedor) {
        const productos = [
            { 
                nombre: "Remera Oversize", 
                precio: 12000, 
                imagen: "images/producto1.jpg",
                descripcion: "Cómoda y moderna para tu día a día.",
                categoria: "Ropa"
            },
            { 
                nombre: "Buzo Canguro", 
                precio: 18500, 
                imagen: "images/producto2.jpg",
                descripcion: "Perfecto para días frescos y relajados.",
                categoria: "Ropa"
            },
            { 
                nombre: "Jogging Urban", 
                precio: 16500, 
                imagen: "images/producto3.jpg",
                descripcion: "Estilo urbano con máxima comodidad.",
                categoria: "Ropa"
            },
            { 
                nombre: "Chaqueta Clásica", 
                precio: 22000, 
                imagen: "images/producto1.jpg",
                descripcion: "Diseño atemporal y elegante.",
                categoria: "Ropa"
            },
            { 
                nombre: "Pantalón Básico", 
                precio: 19500, 
                imagen: "images/producto2.jpg",
                descripcion: "Versatilidad y comodidad.",
                categoria: "Ropa"
            },
            { 
                nombre: "Accesorio Premium", 
                precio: 8500, 
                imagen: "images/producto3.jpg",
                descripcion: "Detalle que marca la diferencia.",
                categoria: "Accesorios"
            }
        ];

        // Limpiar el contenedor
        contenedor.innerHTML = '';

        // Crear las cards de productos
        productos.forEach(producto => {
            const card = `
                <div class="col-md-4 col-lg-4">
                    <div class="card h-100">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <span class="badge">${producto.categoria}</span>
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fw-bold">$${producto.precio.toLocaleString()}</span>
                                <button class="btn btn-dark" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedor.innerHTML += card;
        });
    }
}

// Cargar novedades en la página de novedades
function cargarNovedades() {
    const contenedor = document.getElementById('contenedor-novedades');
    
    if (contenedor) {
        const novedades = [
            {
                titulo: "Nueva Colección",
                descripcion: "Descubrí los nuevos diseños de nuestra línea urbana. ¡Estilo y comodidad asegurados!",
                imagen: "images/novedades/post1.jpg",
                fecha: "Enero 2025"
            },
            {
                titulo: "Ofertas Especiales",
                descripcion: "Hasta 30% de descuento en productos seleccionados por tiempo limitado.",
                imagen: "images/novedades/post2.jpg",
                fecha: "Febrero 2025"
            },
            {
                titulo: "Nuevo Local",
                descripcion: "Abrimos nuestro primer local físico con showroom exclusivo.",
                imagen: "images/novedades/post3.jpg",
                fecha: "Marzo 2025"
            }
        ];

        // Limpiar el contenedor
        contenedor.innerHTML = '';

        // Crear las cards de novedades
        novedades.forEach(novedad => {
            const card = `
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="${novedad.imagen}" class="card-img-top" alt="${novedad.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${novedad.titulo}</h5>
                            <p class="card-text">${novedad.descripcion}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">${novedad.fecha}</small>
                                <button class="btn btn-outline-dark btn-sm">Leer más</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedor.innerHTML += card;
        });
    }
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    alert(`✅ ${nombre} agregado al carrito - $${precio.toLocaleString()}`);
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    cargarNovedades();
});