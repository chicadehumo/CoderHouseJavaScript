const productos = []
let carrito = []
const container = document.getElementById("productsContainer")
const filtroProducto = document.getElementById("filtroProducto")

function generadorAutomatico() {
    productos.push({
        id: 0001,
        nombre: 'Salvia, sahumerio',
        categoria: 'HIERBAS',
        importe: '199',
        descripcion: 'Herraienta perfecta para realizar rituales de conexión, limpieza y protección energética.',
        imagen: '/images/sahumerios.jpg',
        urlVer: "/tienda/productos/sahumerios/"
    }),
    productos.push({
        id: 0002,
        nombre: 'Vela Soja, Luna Nueva',
        categoria: 'RITUALES',
        importe: '249',
        descripcion: 'Activa tus sentidos con herramientas para el alma amorosa',
        imagen: '/images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "/tienda/productos/zafus-zabufon/"
    }),
    productos.push({
        id: 0003,
        nombre: 'kit: Aura en equilibrio',
        categoria: 'RITUALES',
        importe: '1999',
        descripcion: 'Conecta con corazón de la Pachamama y enciende el poder de las plantas al danzar magia.',
        imagen: '/images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "/tienda/productos/juego-basico-maceta-cemento/"
    }),
    productos.push({
        id: 0004,
        nombre: 'Otoño en calma, sahumerio',
        categoria: 'HIERBAS',
        importe: '219',
        descripcion: 'Activa tus sentidos con herramientas el alma amorosa',
        imagen: '/images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "/tienda/productos/juego-basico-maceta-cemento/"
    }),
    productos.push({
        id: 0005,
        nombre: 'Zafu y zabutón',
        categoria: 'YOGA',
        importe: '409',
        descripcion: 'Activa tus sentidos con herramientas el alma amorosa',
        imagen: '/images/zafus_zabufon.jpg',
        urlVer: "/tienda/productos/zafus-zabufon/index.html"
    }),
    productos.push({
        id: 0006,
        nombre: 'Shampoo sólido | Cero caspa',
        categoria: 'CERO_WASTE',
        importe: '45',
        descripcion: 'Activa tus sentidos con herramientas el alma amorosa',
        imagen: '/images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "/tienda/productos/juego-basico-maceta-cemento/"
    }),
    productos.push({
        id: 0007,
        nombre: 'Taller: Conectando con mi corazón',
        categoria: 'TALLER',
        importe: '979',
        descripcion: 'Activa tus sentidos con herramientas el alma amorosa',
        imagen: '/images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "/tienda/productos/juego-basico-maceta-cemento/"
    }),
    productos.push({
        id: 0010,
        nombre: 'Taller: Tejiendo un Japamala',
        categoria: 'TALLER',
        importe: '899',
        descripcion: 'Activa tus sentidos con herramientas el alma amorosa',
        imagen: '/images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "/tienda/productos/juego-basico-maceta-cemento/"
    })
}
generadorAutomatico()

function cargarProductos(array) {
    let card = ""
    container.innerHTML = ""
        array.forEach(producto => {
            card = `<div>
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top w-100" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <div class="btn-group">
                        <a class="btn btn-outline-dark" href="${producto.urlVer}" title="${producto.nombre}">Ver</a>
                        <a id="btn${producto.id}" class="button btn btn-secondary" title="Agregar al carrito">Comprar</a>
                    </div>
                </div>
            </div>    
        </div>`
        container.innerHTML += card
        })
} 
cargarProductos(productos)

const inputFiltrar = document.querySelector("input")

function filtrarProductos() { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputFiltrar.value = inputFiltrar.value.trim()
    if (inputFiltrar.value !== "") {
        const resultado = productos.filter(producto => producto.nombre.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarProductos(productos)
              } else {
                cargarProductos(resultado)
              }
    } else {
        cargarProductos(productos)
    }
}

inputFiltrar.addEventListener("input", filtrarProductos) //A medida que escribimos.

function eventoEnBotones() {
    productos.forEach(prod => {
        const btn = document.querySelector(`#btn${prod.id}`)
              btn.addEventListener("click", ()=> agregarAlCarrito(`${prod.id}`))
    })
}
eventoEnBotones()

function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id == id)
          carrito.push(producto)
          //console.table(carrito)
          localStorage.setItem("carrito", JSON.stringify(carrito))
          alertaAhregoCarrito()
}

function recuperarCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
recuperarCarrito()

const alertaAhregoCarrito = ()=> {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se agrego al carrito',
        showConfirmButton: false,
        timer: 1500
      })
}