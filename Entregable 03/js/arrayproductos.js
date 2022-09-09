const creoID = ()=> parseInt(Math.random() * 100000)

function agregarProducto() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let importe = parseInt(prompt("Ingresa el precio del producto:"))
    let categoria = prompt("Ingresa la categoria del producto:")
    let descripcion = prompt("Ingresa la descripcion del producto:")
    const prod = {id: id, nombre: nombre, importe: importe, categoria: categoria, descripcion: descripcion}
        //new Producto(id, nombre, importe, categoría, descripción)
        productos.push(prod)
        console.table(productos)
}

function generadorAutomatico() {
    productos.push(new Producto(0001, "Salvia, sahumerio", 199, "HIERBAS","Los sahumerios se han empleado desde la antigüedad para realizar rituales de limpieza y protección contra las malas energías."))
    productos.push(new Producto(0002, "Vela Soja, Luna Nueva", 249, "RITUALES","Activa tus sentidos con herramientas para el alma amorosa"))
    productos.push(new Producto(0003, "kit: Aura en equilibrio", 1999, "RITUALES","Activa tus sentidos con herramientas el alma amorosa"))
    productos.push(new Producto(0004, "Otoño en calma, sahumerio", 219, "HIERBAS","Activa tus sentidos con herramientas el alma amorosa"))
    productos.push(new Producto(0005, "Zafu y zabutón", 409, "YOGA","Activa tus sentidos con herramientas el alma amorosa"))
    productos.push(new Producto(0006, "Shampoo sólido | Cero caspa", 45, "CERO_WASTE","Activa tus sentidos con herramientas el alma amorosa"))
    productos.push(new Producto(0007, "Taller: Conectando con mi corazón", 979, "TALLER","Activa tus sentidos con herramientas el alma amorosa"))
    productos.push(new Producto(0010, "Taller: Tejiendo un Japamala", 899, "TALLER","Activa tus sentidos con herramientas el alma amorosa"))
}

function recorrerProductos() {
    for (producto of productos) {
        console.table(producto)
    }
}

function generarCarrito() {
    carrito.push(new Producto(0001, "Salvia, sahumerio", 199))
    carrito.push(new Producto(0004, "Otoño en calma, sahumerio", 219))
    carrito.push(new Producto(0006, "Shampoo sólido | Cero caspa", 45))
}
generadorAutomatico()
generarCarrito()

//Método ForEach()
function listarProductos() {
    //debugger
    productos.forEach((producto) => {
        console.log(producto)
    })
}

//Método find()
function buscarProducto() {
    //debugger
    let nombreProd = prompt("Ingresa el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.find((producto) => producto.nombre.includes(nombreProd))
    if (resultado !== undefined) {
        console.log(resultado)
    } else {
        console.warn("No se encontró un elemento coincidente.")
    }
}

//Método filter()
function filtrarProductos() {
    //debugger
    let parametro = prompt("Ingresa el parámetro a filtrar:")
    let resultado = productos.filter((producto) => producto.nombre.includes(parametro))
    console.table(resultado)
}

//Método some() equivale a indexOf()
function existeProducto() {
    let existe = productos.some((producto) => producto.id === 34444456)
    if (existe) {
        console.log("El código ingresado sí existe en el listado de productos.")
    } else {
        console.warn("No se encontró el código")
    }
}

//Método Map() = mapea una estructura nueva
function proyectarIncremento() {
    let proyeccion = productos.map((producto) => {
        return {
            id: producto.id,
            nombre: producto.nombre,
            importe: producto.importe,
            proyeccion: parseFloat((producto.importe * 1.15).toFixed(2))
        }
    })
    console.table(proyeccion)
}
let DESC = -35000 || 0
//Reduce a un único resultado valores de un array
function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, DESC)
    console.log("Total del carrito:", total)
}

//Ordena los productos por la propiedad indicada
function ordenarProductos() {
    productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.table(productos)
}