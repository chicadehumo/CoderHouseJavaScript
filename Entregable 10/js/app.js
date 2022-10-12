const contenedor = document.querySelector("#productsContainer")
const URL = "../bbdd/productos.json"
const carrito = []
let maitristock = []
let contenidoHTML = ""
const filtroProducto = document.getElementById("filtroProducto")

const mostrarError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
                <img src="images/svg/recycle.svg" width="150">
            </div>`
}

const mostrarCard = (contenido)=> {
    const {id, descripcion, nombre, urlVer, imagen} = contenido
    return `<div>
                <div class="card">
                    <img src="${imagen}" class="card-img-top w-100" alt="${nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                        <div class="btn-group">
                            <a class="btn btn-outline-dark" href="${urlVer}" title="${nombre}">Ver</a>
                            <a id="${id}" class="button btn btn-secondary btnCard" title="Agregar al carrito">Comprar</a>
                        </div>
                    </div>
                </div>    
            </div>`
}

const cargarContenido  = async ()=> {
    //Promesa
    /* try se trabaja como then
    fetch(URL)
        .then(response => response.json())
        .then(data => maitristock = data)
        .then(maitristock => maitristock.forEach(etiqueta => contenidoHTML += mostrarCard(etiqueta)))
        .catch(error => {
            console.error("Se ha producido un error.", error)
            contenidoHTML += mostrarError()
        })
        .finally(() => contenedor.innerHTML = contenidoHTML)
     */


    //Estructura de control de peticiones para manipular si hay un error y la estructura determinada si hay o no error en finally
    try {
        // permite convertir los datos en string y se almacena en data
        const response = await fetch(URL)
        //console.table(response)
        const data = await response.json()
              maitristock  = data 
              //iterar las cards de stock
              maitristock.forEach(etiqueta => contenidoHTML += mostrarCard(etiqueta))
    } 
    catch (error) {
        contenidoHTML += mostrarError()
    }
    finally {
        contenedor.innerHTML = contenidoHTML
    }
}

document.addEventListener("DOMContentLoaded", async ()=> {
    const espero = await cargarContenido()
          activarClicks()
})

const activarClicks = ()=> {
    let botones = document.querySelectorAll(".btnCard")
        botones.forEach(boton => boton.addEventListener("click", (e)=> agregarAlCarrito(e)))
    /*let imagenes = document.querySelectorAll(".card img")
        imagenes.forEach(imagen => imagen.addEventListener("click", (e)=> verDetalle(e.target.id)))*/
}

const inputFiltrar = document.querySelector("input")

const filtrarProductos = ()=> { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputFiltrar.value = inputFiltrar.value.trim()
    
    if (inputFiltrar.value !== "") {
        const resultado = contenedor.filter(etiqueta => etiqueta.nombre.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarContenido()
              } else {
                cargarContenido(resultado)
              }
    } else {
        cargarContenido()
    }
}

inputFiltrar.addEventListener("input", filtrarProductos) //A medida que escribimos.



const agregarAlCarrito = (event)=> {
    let item = maitristock.find(etiqueta => etiqueta.id === parseInt(event.target.id))
        item !== undefined && carrito.push(item)
        console.clear()
        console.table(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        alertaAgregoCarrito()
}

const alertaAgregoCarrito = ()=> {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se agrego al carrito',
        showConfirmButton: false,
        timer: 1500
      })
}