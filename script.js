// ============================================================
// PC Builder - Comparador de componentes de PC
// Datos de ejemplo (ficticios) + logica de renderizado.
// ============================================================

const componentes = [
  {
    id: 1,
    nombre: "AMD Ryzen 5 7600X",
    marca: "AMD",
    categoria: "cpu",
    categoriaNombre: "Procesador",
    precio: 250000,
    destacado: true,
    specs: {
      "Núcleos / hilos": "6 / 12",
      "Frecuencia boost": "5.3 GHz",
      TDP: "105 W",
      Socket: "AM5",
      Cache: "32 MB",
    },
  },
  {
    id: 2,
    nombre: "Intel Core i5-14600K",
    marca: "Intel",
    categoria: "cpu",
    categoriaNombre: "Procesador",
    precio: 320000,
    specs: {
      "Núcleos / hilos": "14 / 20",
      "Frecuencia boost": "5.2 GHz",
      TDP: "125 W",
      Socket: "LGA1700",
      Cache: "24 MB",
    },
  },
  {
    id: 3,
    nombre: "AMD Ryzen 7 7800X3D",
    marca: "AMD",
    categoria: "cpu",
    categoriaNombre: "Procesador",
    precio: 550000,
    specs: {
      "Núcleos / hilos": "8 / 16",
      "Frecuencia boost": "5.0 GHz",
      TDP: "120 W",
      Cache: "96 MB",
      Socket: "AM5",
    },
  },
  {
    id: 4,
    nombre: "NVIDIA GeForce RTX 4060",
    marca: "NVIDIA",
    categoria: "gpu",
    categoriaNombre: "Tarjeta de video",
    precio: 450000,
    destacado: true,
    specs: {
      VRAM: "8 GB GDDR6",
      "Frecuencia boost": "2.5 GHz",
      TDP: "115 W",
      DLSS: "Sí",
      "Ray Tracing": "Sí",
    },
  },
  {
    id: 5,
    nombre: "AMD Radeon RX 7600 XT",
    marca: "AMD",
    categoria: "gpu",
    categoriaNombre: "Tarjeta de video",
    precio: 500000,
    specs: {
      VRAM: "8 GB GDDR6",
      "Frecuencia boost": "2.6 GHz",
      TDP: "138 W",
      FSR: "Sí",
      "Ray Tracing": "Sí",
    },
  },
  {
    id: 6,
    nombre: "NVIDIA GeForce RTX 3080",
    marca: "NVIDIA",
    categoria: "gpu",
    categoriaNombre: "Tarjeta de video",
    precio: 900000,
    specs: {
      VRAM: "10 GB GDDR6X",
      "Frecuencia boost": "1.7 GHz",
      TDP: "320 W",
      DLSS: "Sí",
      "Ray Tracing": "Sí",
    },
  },
  {
    id: 7,
    nombre: "Corsair Vengeance DDR5 16 GB",
    marca: "Corsair",
    categoria: "ram",
    categoriaNombre: "Memoria RAM",
    precio: 80000,
    destacado: true,
    specs: {
      Capacidad: "16 GB",
      "Módulos": "2 x 8 GB",
      Velocidad: "5600 MHz",
      Interfaz: "DDR5",
      Latencia: "CL36",
    },
  },
  {
    id: 8,
    nombre: "Kingston Fury Beast DDR4 16 GB",
    marca: "Kingston",
    categoria: "ram",
    categoriaNombre: "Memoria RAM",
    precio: 45000,
    specs: {
      Capacidad: "16 GB",
      "Módulos": "2 x 8 GB",
      Velocidad: "3200 MHz",
      Interfaz: "DDR4",
      Latencia: "CL16",
    },
  },
  {
    id: 9,
    nombre: "Corsair Dominator DDR5 32 GB",
    marca: "Corsair",
    categoria: "ram",
    categoriaNombre: "Memoria RAM",
    precio: 160000,
    specs: {
      Capacidad: "32 GB",
      "Módulos": "2 x 16 GB",
      Velocidad: "6000 MHz",
      Interfaz: "DDR5",
      Latencia: "CL36",
    },
  },
  {
    id: 10,
    nombre: "ASUS ROG Strix B650-E",
    marca: "ASUS",
    categoria: "motherboard",
    categoriaNombre: "Placa madre",
    precio: 180000,
    specs: {
      Socket: "AM5",
      Chipset: "B650",
      Memoria: "DDR5",
      "Interfaz PCIe": "PCIe 4.0 x16",
      "Slots M.2": "4",
    },
  },
  {
    id: 11,
    nombre: "MSI MAG B760 Tomahawk",
    marca: "MSI",
    categoria: "motherboard",
    categoriaNombre: "Placa madre",
    precio: 140000,
    specs: {
      Socket: "LGA1700",
      Chipset: "B760",
      Memoria: "DDR4",
      "Interfaz PCIe": "PCIe 4.0 x16",
      "Slots M.2": "2",
    },
  },
  {
    id: 12,
    nombre: "Samsung 980 Pro 1 TB",
    marca: "Samsung",
    categoria: "storage",
    categoriaNombre: "Almacenamiento",
    precio: 120000,
    specs: {
      Capacidad: "1 TB",
      Interfaz: "NVMe PCIe 4.0",
      "Velocidad lectura": "7,000 MB/s",
      "Velocidad escritura": "6,000 MB/s",
      Garantía: "3 años",
    },
  },
  {
    id: 13,
    nombre: "Seagate Barracuda 2 TB",
    marca: "Seagate",
    categoria: "storage",
    categoriaNombre: "Almacenamiento",
    precio: 70000,
    specs: {
      Capacidad: "2 TB",
      Interfaz: "SATA III",
      RPM: "7,200",
      Cache: "64 MB",
    },
  },
  {
    id: 14,
    nombre: "WD Black SN850X 2 TB",
    marca: "Western Digital",
    categoria: "storage",
    categoriaNombre: "Almacenamiento",
    precio: 200000,
    specs: {
      Capacidad: "2 TB",
      Interfaz: "NVMe PCIe 4.0",
      "Velocidad lectura": "7,000 MB/s",
      "Velocidad escritura": "5,000 MB/s",
    },
  },
  {
    id: 15,
    nombre: "Crucial MX4 1 TB",
    marca: "Crucial",
    categoria: "storage",
    categoriaNombre: "Almacenamiento",
    precio: 90000,
    specs: {
      Capacidad: "1 TB",
      Interfaz: "SATA III",
      Velocidad: "550 MB/s",
    },
  },
];

const estado = {
  seleccionados: [],
  categoriaActiva: "todos",
  busqueda: "",
  ordenar: "default",
};

const elementos = {
  grid: document.getElementById("catalogo-grid"),
  gridDestacados: document.getElementById("destacados-grid"),
  categoriasGrid: document.getElementById("categorias-grid"),
  busqueda: document.getElementById("busqueda"),
  ordenar: document.getElementById("ordenar"),
  btnLimpiarFiltros: document.getElementById("btn-limpiar-filtros"),
  filtros: document.getElementById("filtros"),
  contenedorTabla: document.getElementById("contenedor-tabla"),
  mensajeComparacion: document.getElementById("mensaje-comparacion"),
  tablaBody: document.getElementById("tabla-comparacion-body"),
  btnLimpiar: document.getElementById("btn-limpiar"),
  mensajeSinResultados: document.getElementById("mensaje-sin-resultados"),
};

function imagenSrc(componente) {
  return `https://placehold.co/640x400?text=${encodeURIComponent(componente.nombre)}`;
}

function cambiarImagenFallback(img, categoria) {
  img.src = `https://placehold.co/640x400?text=${encodeURIComponent(categoria + " PC")}`;
}

function crearTarjetaHTML(componente) {
  const estaSeleccionado = estado.seleccionados.some((s) => s.id === componente.id);
  const puedeAgregar = !estaSeleccionado && estado.seleccionados.length < 2;

  let textoBoton;
  if (estaSeleccionado) {
    textoBoton = "Quitar del comparador";
  } else if (puedeAgregar) {
    textoBoton = "Seleccionar para comparar";
  } else {
    textoBoton = "Máximo 2 componentes";
  }

  const specsHTML = Object.entries(componente.specs)
    .map(([nombre, valor]) => `<li><strong>${nombre}:</strong> ${valor}</li>`)
    .join("");

  const claseTarjeta = estaSeleccionado ? "tarjeta seleccionada" : "tarjeta";

  return `
    <article class="${claseTarjeta}">
      <div class="tarjeta-imagen">
        <img src="${imagenSrc(componente)}" alt="Gamer ${componente.categoriaNombre} ${componente.marca} ${componente.nombre}" loading="lazy" onerror="cambiarImagenFallback(this, '${componente.categoriaNombre}')">
      </div>
      <div class="tarjeta-cuerpo">
        <span class="tarjeta-categoria">${componente.categoriaNombre}</span>
        <h3 class="tarjeta-nombre">${componente.nombre}</h3>
        <p class="tarjeta-marca">${componente.marca}</p>
        <p class="tarjeta-precio">ARS $${componente.precio.toLocaleString("es-AR")}</p>
        <p class="tarjeta-nota">Precio de ejemplo ficticio</p>
        <ul class="tarjeta-specs">${specsHTML}</ul>
        <button type="button" class="btn btn-seleccionar" data-seleccionar="${componente.id}" ${puedeAgregar || estaSeleccionado ? "" : "disabled"}>
          ${textoBoton}
        </button>
      </div>
    </article>
  `;
}

function obtenerListaFiltrada() {
  const termino = estado.busqueda.trim().toLowerCase();
  let lista = componentes.filter((componente) => {
    const coincideCategoria = estado.categoriaActiva === "todos" || componente.categoria === estado.categoriaActiva;
    const coincideBusqueda = termino === "" || componente.nombre.toLowerCase().includes(termino) || componente.marca.toLowerCase().includes(termino) || componente.categoriaNombre.toLowerCase().includes(termino);
    return coincideCategoria && coincideBusqueda;
  });

  if (estado.ordenar === "asc") {
    lista = [...lista].sort((a, b) => a.precio - b.precio);
  }
  if (estado.ordenar === "desc") {
    lista = [...lista].sort((a, b) => b.precio - a.precio);
  }
  return lista;
}

function crearTarjetasHTML(lista) {
  return lista.map((componente) => crearTarjetaHTML(componente)).join("");
}

function bindearBotonesSeleccion(contenedor) {
  contenedor.querySelectorAll("[data-seleccionar]").forEach((boton) => {
    boton.addEventListener("click", () => toggleComponente(Number(boton.dataset.seleccionar)));
  });
}

function renderizarTarjetas() {
  const lista = obtenerListaFiltrada();
  if (lista.length === 0) {
    elementos.grid.innerHTML = "";
    elementos.mensajeSinResultados.textContent = "No se encontraron componentes. Probá con otro nombre, marca o cambiá el filtro.";
    elementos.mensajeSinResultados.classList.remove("oculto");
    return;
  }
  elementos.grid.innerHTML = crearTarjetasHTML(lista);
  elementos.mensajeSinResultados.classList.add("oculto");
  bindearBotonesSeleccion(elementos.grid);
}

function obtenerComponentesDestacados() {
  return componentes.filter((componente) => componente.destacado);
}

function renderizarDestacados() {
  const lista = obtenerComponentesDestacados();
  elementos.gridDestacados.innerHTML = crearTarjetasHTML(lista);
  bindearBotonesSeleccion(elementos.gridDestacados);
}

function toggleComponente(id) {
  const componente = componentes.find((c) => c.id === id);
  if (!componente) return;

  const indice = estado.seleccionados.findIndex((s) => s.id === id);
  if (indice !== -1) {
    estado.seleccionados.splice(indice, 1);
    renderizarTarjetas();
    renderizarDestacados();
    renderizarComparacion();
    return;
  }

  if (estado.seleccionados.length >= 2) return;

  if (estado.seleccionados.length === 1 && estado.seleccionados[0].categoria !== componente.categoria) {
    renderizarComparacion();
    return;
  }

  estado.seleccionados.push(componente);
  renderizarTarjetas();
  renderizarDestacados();
  renderizarComparacion();
}

function generarFilasComparacion(primera, segunda) {
  const claves = [...new Set([...Object.keys(primera.specs), ...Object.keys(segunda.specs)])];
  return claves.map((clave) => {
    const valorPrimera = primera.specs[clave] ?? "—";
    const valorSegunda = segunda.specs[clave] ?? "—";
    const clase = valorPrimera !== valorSegunda ? " celda-diferente" : "";
    return `<tr><th scope="row">${clave}</th><td${clase}>${valorPrimera}</td><td${clase}>${valorSegunda}</td></tr>`;
  }).join("");
}

function renderizarComparacion() {
  const hayDosSeleccionados = estado.seleccionados.length === 2;
  elementos.contenedorTabla.classList.toggle("oculto", !hayDosSeleccionados);
  elementos.mensajeComparacion.classList.toggle("oculto", hayDosSeleccionados);

  if (!hayDosSeleccionados) {
    if (estado.seleccionados.length === 0) {
      elementos.mensajeComparacion.textContent = "Todavía no hay componentes seleccionados. Empezá a elegir en el catálogo!";
    } else {
      elementos.mensajeComparacion.textContent = "Falta un componente para completar la comparación. Elegí uno más del catálogo.";
    }
    return;
  }

  const primera = estado.seleccionados[0];
  const segunda = estado.seleccionados[1];

  if (primera.categoria !== segunda.categoria) {
    elementos.contenedorTabla.classList.add("oculto");
    elementos.mensajeComparacion.textContent = "No se pueden comparar componentes de categorías distintas. Elegí dos del mismo tipo (por ejemplo, dos procesadores).";
    return;
  }

  document.getElementById("columna-1").textContent = primera.nombre;
  document.getElementById("columna-2").textContent = segunda.nombre;
  elementos.tablaBody.innerHTML = generarFilasComparacion(primera, segunda);
}

function limpiarComparacion() {
  estado.seleccionados = [];
  renderizarTarjetas();
  renderizarDestacados();
  renderizarComparacion();
}

function sincronizarChips() {
  elementos.filtros.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("activo", chip.dataset.categoria === estado.categoriaActiva);
  });
}

function limpiarFiltros() {
  estado.busqueda = "";
  estado.categoriaActiva = "todos";
  estado.ordenar = "default";
  elementos.busqueda.value = "";
  elementos.ordenar.value = "default";
  sincronizarChips();
  renderizarTarjetas();
}

function configurarFiltros() {
  elementos.filtros.addEventListener("click", (evento) => {
    const chip = evento.target.closest(".chip");
    if (!chip) return;
    estado.categoriaActiva = chip.dataset.categoria;
    sincronizarChips();
    renderizarTarjetas();
  });

  elementos.busqueda.addEventListener("input", (evento) => {
    estado.busqueda = evento.target.value;
    renderizarTarjetas();
  });

  elementos.ordenar.addEventListener("change", (evento) => {
    estado.ordenar = evento.target.value;
    renderizarTarjetas();
  });

  elementos.btnLimpiarFiltros.addEventListener("click", limpiarFiltros);

  elementos.categoriasGrid.addEventListener("click", (evento) => {
    const boton = evento.target.closest("[data-categoria]");
    if (!boton) return;
    estado.categoriaActiva = boton.dataset.categoria;
    sincronizarChips();
    renderizarTarjetas();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });

  elementos.btnLimpiar.addEventListener("click", limpiarComparacion);
}

function iniciar() {
  configurarFiltros();
  renderizarComparacion();
  renderizarTarjetas();
  renderizarDestacados();
}

document.addEventListener("DOMContentLoaded", iniciar);
