const productos = [
  {
    id: 1,
    nombre: "Lámpara decorativa moderna",
    precio: 300000,
    categoria: "Lámparas decorativas",
    img: "https://www.dropbox.com/scl/fi/g8sykn5zlb7b5nk2xik1f/imagen_2026-04-21_084300412.png?rlkey=kg3q88e3k0qhpi9ylk5d2fgfx&raw=1",
    descripcion: "Diseño elegante y moderno ideal para darle un toque sofisticado a tu hogar."
  },
  {
    id: 2,
    nombre: "Lámpara colgante minimalista",
    precio: 120000,
    categoria: "Lámparas colgantes",
    img: "https://www.dropbox.com/scl/fi/hnasrltxjt0ir08byhv35/imagen_2026-04-21_084314995.png?rlkey=eplk70zxoao08a7fmc8lemz1a&raw=1",
    descripcion: "Perfecta para ambientes modernos con estilo limpio y contemporáneo."
  },
  {
    id: 3,
    nombre: "Lámpara de mesa industrial",
    precio: 260000,
    categoria: "Lámparas de mesa",
    img: "https://www.dropbox.com/scl/fi/ntl0uajg371yzz62n6gwu/imagen_2026-04-21_084327326.png?rlkey=ssvog1t394g0cigew2ew866gw&raw=1",
    descripcion: "Una referencia de carácter fuerte para escritorios, mesas auxiliares o estudios."
  },
  {
    id: 4,
    nombre: "Lámpara de mesa Verona",
    precio: 250000,
    categoria: "Lámparas de mesa",
    img: "https://www.dropbox.com/scl/fi/cx0p7v521e3813menne3a/imagen_2026-04-21_084339518.png?rlkey=77jxw5mhzwdk72wvn667iyt5l&raw=1",
    descripcion: "Diseño decorativo con presencia elegante para salas y habitaciones."
  },
  {
    id: 5,
    nombre: "Lámpara de piso aura dorada",
    precio: 320000,
    categoria: "Lámparas de piso",
    img: "https://www.dropbox.com/scl/fi/nhlry47clt4xzx2nuppsz/imagen_2026-04-21_084350751.png?rlkey=otgfxh9ujvki72v31dzzkbqoc&raw=1",
    descripcion: "Ideal para destacar rincones con una iluminación cálida y premium."
  },
  {
    id: 6,
    nombre: "Lámpara colgante bali en ratán",
    precio: 140000,
    categoria: "Lámparas colgantes",
    img: "https://www.dropbox.com/scl/fi/xilfwks5w7rtsvupc48nc/imagen_2026-04-21_084359183.png?rlkey=a73z3cbmlbdxsap1b70cqw2oz&raw=1",
    descripcion: "Estilo artesanal y natural para espacios acogedores y decorativos."
  },
  {
    id: 7,
    nombre: "Lámpara LED decorativa estrellas",
    precio: 190000,
    categoria: "Lámparas decorativas",
    img: "https://www.dropbox.com/scl/fi/fil07w9pdhzctzxt1r9ue/imagen_2026-04-21_084415248.png?rlkey=he0f4sv3w1x60dn012ei65ogc&raw=1",
    descripcion: "Una pieza llamativa con tecnología LED y diseño moderno."
  },
  {
    id: 8,
    nombre: "Lámpara colgante moderna anillos",
    precio: 350000,
    categoria: "Lámparas colgantes",
    img: "https://www.dropbox.com/scl/fi/fcpg1v2vlgt0h03mwzkqg/imagen_2026-04-21_084422402.png?rlkey=regwia30hv96pl6e9s8vw9oeh&raw=1",
    descripcion: "Modelo premium con presencia visual fuerte para comedores y salas."
  },
  {
    id: 9,
    nombre: "Lámpara decorativa orgánica",
    precio: 200000,
    categoria: "Lámparas decorativas",
    img: "https://www.dropbox.com/scl/fi/ic2tw56wab9mupbd96xqe/imagen_2026-04-21_084433270.png?rlkey=9og73p16vtm22wx808oax1s5f&raw=1",
    descripcion: "Diseño artístico para quienes buscan piezas diferentes y modernas."
  },
  {
    id: 10,
    nombre: "Lámpara colgante espiral LED",
    precio: 400000,
    categoria: "Lámparas colgantes",
    img: "https://www.dropbox.com/scl/fi/q74lyix0jjn535n0y3zo6/imagen_2026-04-21_084446417.png?rlkey=n4jvw8grs9urg8tvyp5v3w3hv&raw=1",
    descripcion: "Referencia de alta gama con estructura LED moderna e impactante."
  },
  {
    id: 11,
    nombre: "Lámpara decorativa cristal LED",
    precio: 120000,
    categoria: "Lámparas decorativas",
    img: "https://www.dropbox.com/scl/fi/e92l28uakrmqxwvc9kd15/imagen_2026-04-21_084453744.png?rlkey=5nmp9giklsewxgq6bdcceoeqn&raw=1",
    descripcion: "Brillo decorativo y diseño elegante con excelente relación visual-precio."
  },
  {
    id: 12,
    nombre: "Lámpara decorativa hoja LED",
    precio: 95000,
    categoria: "Lámparas decorativas",
    img: "https://www.dropbox.com/scl/fi/hbsgjltlydrz4e8ve6w0n/imagen_2026-04-21_084502886.png?rlkey=ihq8jxmv69l5hesfchrqoyagc&raw=1",
    descripcion: "Una opción económica y decorativa con forma moderna y atractiva."
  },
  {
    id: 13,
    nombre: "Reloj de pared LED moderno",
    precio: 135000,
    categoria: "Relojes decorativos",
    img: "https://www.dropbox.com/scl/fi/giluslmzgypjd9m2hijb8/imagen_2026-04-21_084512253.png?rlkey=w64yzsmmp66w4zufft48dq7vx&raw=1",
    descripcion: "Complemento funcional y decorativo para espacios contemporáneos."
  },
  {
    id: 14,
    nombre: "Lámpara de techo aros blancos",
    precio: 95000,
    categoria: "Lámparas de techo",
    img: "https://www.dropbox.com/scl/fi/ohmhyz97s02o22dqzjijc/imagen_2026-04-21_084521294.png?rlkey=nxeaxgz3uln7d9v1idwny5g7y&raw=1",
    descripcion: "Diseño moderno de techo con líneas limpias y gran presencia visual."
  },
  {
    id: 15,
    nombre: "Lámpara de techo aros negros",
    precio: 95000,
    categoria: "Lámparas de techo",
    img: "https://www.dropbox.com/scl/fi/sccgqmvlw0pk4p2fykb3j/imagen_2026-04-21_084530827.png?rlkey=ii447apx0jwjq8w0zvjq9c58w&raw=1",
    descripcion: "Opción moderna de techo con acabado oscuro y estilo minimalista."
  }
];

let carrito = new Map();
let ultimaCategoriaInteres = localStorage.getItem("ultimaCategoriaInteres") || "todos";
let ratings = cargarRatings();

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");
const cantidadCarrito = document.getElementById("cantidad-carrito");
const selectorCategoria = document.getElementById("categoria");
const buscador = document.getElementById("buscador");
const topElo = document.getElementById("top-elo");
const dueloContainer = document.getElementById("duelo-container");
const recomendadosContainer = document.getElementById("recomendados");
const tituloRecomendados = document.getElementById("titulo-recomendados");

/* =========================
   FORMATO MONEDA COLOMBIA
========================= */
function formatearPrecio(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(valor);
}

/* =========================
   UTILIDADES
========================= */
function obtenerProductoPorId(id) {
  return productos.find(producto => producto.id === id);
}

function totalDelCarrito() {
  return Array.from(carrito.values()).reduce((acc, item) => {
    return acc + item.precio * item.cantidad;
  }, 0);
}

function guardarCategoriaInteres(categoria) {
  ultimaCategoriaInteres = categoria;
  localStorage.setItem("ultimaCategoriaInteres", categoria);
}

function obtenerCategoriaPreferida() {
  if (selectorCategoria && selectorCategoria.value !== "todos") {
    return selectorCategoria.value;
  }

  if (ultimaCategoriaInteres !== "todos") {
    return ultimaCategoriaInteres;
  }

  return null;
}

function manejarErrorImagen(imgElemento) {
  imgElemento.src =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
        <rect width="100%" height="100%" fill="#f3eae8"/>
        <text x="50%" y="48%" text-anchor="middle" fill="#857770" font-size="28" font-family="Arial">
          Imagen pendiente
        </text>
        <text x="50%" y="56%" text-anchor="middle" fill="#857770" font-size="18" font-family="Arial">
          Revisa la URL de la imagen
        </text>
      </svg>
    `);
}

function obtenerCategoriasUnicas() {
  return [...new Set(productos.map(producto => producto.categoria))].sort();
}

/* =========================
   CARGA DE CATEGORÍAS
========================= */
function cargarCategorias() {
  const categorias = obtenerCategoriasUnicas();

  categorias.forEach(categoria => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    selectorCategoria.appendChild(option);
  });
}

/* =========================
   FILTRO Y BÚSQUEDA
========================= */
function obtenerProductosFiltrados() {
  const categoriaSeleccionada = selectorCategoria.value;
  const textoBusqueda = buscador.value.trim().toLowerCase();

  let resultado = [...productos];

  if (categoriaSeleccionada !== "todos") {
    resultado = resultado.filter(producto => producto.categoria === categoriaSeleccionada);
  }

  if (textoBusqueda) {
    resultado = resultado.filter(producto => {
      return (
        producto.nombre.toLowerCase().includes(textoBusqueda) ||
        producto.categoria.toLowerCase().includes(textoBusqueda) ||
        producto.descripcion.toLowerCase().includes(textoBusqueda)
      );
    });
  }

  return resultado;
}

function aplicarFiltros() {
  const categoriaSeleccionada = selectorCategoria.value;

  if (categoriaSeleccionada !== "todos") {
    guardarCategoriaInteres(categoriaSeleccionada);
  }

  renderProductos(obtenerProductosFiltrados());
  renderRecomendados();
}

/* =========================
   RENDER PRODUCTOS
========================= */
function renderProductos(lista = productos) {
  contenedorProductos.innerHTML = "";

  if (lista.length === 0) {
    contenedorProductos.innerHTML = `
      <article class="producto">
        <div class="producto-contenido">
          <h3>No encontramos productos con ese filtro</h3>
          <p>Prueba con otra categoría o cambia la búsqueda.</p>
        </div>
      </article>
    `;
    return;
  }

  lista.forEach(prod => {
    const article = document.createElement("article");
    article.className = "producto";
    article.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <div class="producto-contenido">
        <span class="badge-categoria">${prod.categoria}</span>
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <div class="precio">${formatearPrecio(prod.precio)}</div>
        <button class="boton-agregar" onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
      </div>
    `;

    const imagen = article.querySelector("img");
    imagen.addEventListener("error", () => manejarErrorImagen(imagen));

    contenedorProductos.appendChild(article);
  });
}

/* =========================
   RECOMENDADOS
========================= */
function renderRecomendados() {
  if (!recomendadosContainer || !tituloRecomendados) return;

  const categoriaPreferida = obtenerCategoriaPreferida();

  let candidatos = categoriaPreferida
    ? productos.filter(producto => producto.categoria === categoriaPreferida)
    : [...productos];

  candidatos.sort((a, b) => ratings[b.id] - ratings[a.id]);

  if (candidatos.length < 4) {
    const complementarios = productos
      .filter(producto => !candidatos.some(candidato => candidato.id === producto.id))
      .sort((a, b) => ratings[b.id] - ratings[a.id]);

    candidatos = [...candidatos, ...complementarios];
  }

  const seleccionados = candidatos.slice(0, 4);

  tituloRecomendados.textContent = categoriaPreferida
    ? `Recomendados en ${categoriaPreferida}`
    : "Recomendados para ti";

  recomendadosContainer.innerHTML = "";

  seleccionados.forEach(producto => {
    const card = document.createElement("article");
    card.className = "recomendado-card";
    card.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}">
      <div class="recomendado-info">
        <span class="badge-categoria">${producto.categoria}</span>
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio-recomendado">${formatearPrecio(producto.precio)}</p>
        <button class="boton-agregar" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      </div>
    `;

    const imagen = card.querySelector("img");
    imagen.addEventListener("error", () => manejarErrorImagen(imagen));

    recomendadosContainer.appendChild(card);
  });
}

/* =========================
   CARRITO
========================= */
function agregarAlCarrito(id) {
  const producto = obtenerProductoPorId(id);
  if (!producto) return;

  guardarCategoriaInteres(producto.categoria);

  if (carrito.has(id)) {
    carrito.get(id).cantidad += 1;
  } else {
    carrito.set(id, { ...producto, cantidad: 1 });
  }

  guardarCarrito();
  actualizarCarrito();
  renderRecomendados();
}

function cambiarCantidad(id, cambio) {
  if (!carrito.has(id)) return;

  const item = carrito.get(id);
  item.cantidad += cambio;

  if (item.cantidad <= 0) {
    carrito.delete(id);
  } else {
    carrito.set(id, item);
  }

  guardarCarrito();
  actualizarCarrito();
}

function eliminarDelCarrito(id) {
  if (!carrito.has(id)) return;

  carrito.delete(id);
  guardarCarrito();
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";

  if (carrito.size === 0) {
    listaCarrito.innerHTML = `<li class="carrito-vacio">Tu carrito está vacío.</li>`;
    totalCarrito.textContent = formatearPrecio(0);
    cantidadCarrito.textContent = "0";
    return;
  }

  let total = 0;
  let cantidadTotal = 0;

  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    cantidadTotal += item.cantidad;

    const li = document.createElement("li");
    li.className = "item-carrito";
    li.innerHTML = `
      <strong>${item.nombre}</strong>
      <div class="item-detalle">
        ${formatearPrecio(item.precio)} x ${item.cantidad} = ${formatearPrecio(subtotal)}
      </div>
      <div class="controles-cantidad">
        <button onclick="cambiarCantidad(${item.id}, -1)">−</button>
        <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
        <button class="eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
      </div>
    `;
    listaCarrito.appendChild(li);
  });

  totalCarrito.textContent = formatearPrecio(total);
  cantidadCarrito.textContent = cantidadTotal;
}

function vaciarCarrito(confirmar = true) {
  if (carrito.size === 0) return;

  if (!confirmar || confirm("¿Seguro que quieres vaciar el carrito?")) {
    carrito.clear();
    guardarCarrito();
    actualizarCarrito();
  }
}

function finalizarCompra() {
  if (carrito.size === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de continuar.");
    return;
  }

  const items = Array.from(carrito.values())
    .map(item => `• ${item.nombre} x${item.cantidad} - ${formatearPrecio(item.precio * item.cantidad)}`)
    .join("%0A");

  const total = formatearPrecio(totalDelCarrito());
  const mensaje = `Hola, quiero realizar este pedido en Mundo Solar:%0A%0A${items}%0A%0ATotal: ${total}%0A%0AMétodo de entrega: Por confirmar%0AMétodo de pago: Por confirmar`;

  window.open(`https://wa.me/573212435435?text=${mensaje}`, "_blank");
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(Array.from(carrito.entries())));
}

function cargarCarrito() {
  const data = localStorage.getItem("carrito");

  if (data) {
    carrito = new Map(JSON.parse(data));
  }

  actualizarCarrito();
}

/* =========================
   ELO
========================= */
function cargarRatings() {
  const guardados = localStorage.getItem("ratings-mundo-solar");

  if (guardados) {
    return JSON.parse(guardados);
  }

  const iniciales = {};
  productos.forEach(producto => {
    iniciales[producto.id] = 1000;
  });

  localStorage.setItem("ratings-mundo-solar", JSON.stringify(iniciales));
  return iniciales;
}

function guardarRatings() {
  localStorage.setItem("ratings-mundo-solar", JSON.stringify(ratings));
}

function actualizarElo(ganadorId, perdedorId) {
  const K = 32;
  const ratingGanador = ratings[ganadorId];
  const ratingPerdedor = ratings[perdedorId];

  const esperadoGanador = 1 / (1 + Math.pow(10, (ratingPerdedor - ratingGanador) / 400));
  const esperadoPerdedor = 1 / (1 + Math.pow(10, (ratingGanador - ratingPerdedor) / 400));

  ratings[ganadorId] = Math.round(ratingGanador + K * (1 - esperadoGanador));
  ratings[perdedorId] = Math.round(ratingPerdedor + K * (0 - esperadoPerdedor));

  guardarRatings();
}

function renderTopElo() {
  if (!topElo) return;

  const ordenados = [...productos].sort((a, b) => ratings[b.id] - ratings[a.id]);
  topElo.innerHTML = "";

  ordenados.forEach((producto, index) => {
    const card = document.createElement("article");
    card.className = "top-card";
    card.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}">
      <div class="top-card-info">
        <span class="badge-ranking">#${index + 1}</span>
        <h3>${producto.nombre}</h3>
        <p>${producto.categoria}</p>
        <p class="elo-score">ELO ${ratings[producto.id]}</p>
      </div>
    `;

    const imagen = card.querySelector("img");
    imagen.addEventListener("error", () => manejarErrorImagen(imagen));

    topElo.appendChild(card);
  });
}

function generarDuelo() {
  if (!dueloContainer || productos.length < 2) return;

  let index1 = Math.floor(Math.random() * productos.length);
  let index2;

  do {
    index2 = Math.floor(Math.random() * productos.length);
  } while (index1 === index2);

  const p1 = productos[index1];
  const p2 = productos[index2];

  dueloContainer.innerHTML = `
    <article class="duelo-card">
      <img src="${p1.img}" alt="${p1.nombre}">
      <div class="duelo-info">
        <span class="badge-categoria">${p1.categoria}</span>
        <h3>${p1.nombre}</h3>
        <p>${formatearPrecio(p1.precio)} · ELO ${ratings[p1.id]}</p>
        <button class="duelo-boton" onclick="votarDuelo(${p1.id}, ${p2.id})">Elegir este</button>
      </div>
    </article>

    <article class="duelo-card">
      <img src="${p2.img}" alt="${p2.nombre}">
      <div class="duelo-info">
        <span class="badge-categoria">${p2.categoria}</span>
        <h3>${p2.nombre}</h3>
        <p>${formatearPrecio(p2.precio)} · ELO ${ratings[p2.id]}</p>
        <button class="duelo-boton" onclick="votarDuelo(${p2.id}, ${p1.id})">Elegir este</button>
      </div>
    </article>
  `;

  dueloContainer.querySelectorAll("img").forEach(imagen => {
    imagen.addEventListener("error", () => manejarErrorImagen(imagen));
  });
}

function votarDuelo(ganadorId, perdedorId) {
  actualizarElo(ganadorId, perdedorId);
  renderTopElo();
  renderRecomendados();
  generarDuelo();
}

function reiniciarElo() {
  const nuevos = {};
  productos.forEach(producto => {
    nuevos[producto.id] = 1000;
  });

  ratings = nuevos;
  guardarRatings();
  renderTopElo();
  renderRecomendados();
  generarDuelo();
}

/* =========================
   EVENTOS
========================= */
selectorCategoria.addEventListener("change", aplicarFiltros);
buscador.addEventListener("input", aplicarFiltros);

/* =========================
   INICIO
========================= */
cargarCategorias();
renderProductos();
cargarCarrito();
renderRecomendados();
renderTopElo();
generarDuelo();
