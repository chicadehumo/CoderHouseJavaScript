function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(prod => {
            let fila = `<tr>
                            <td><p>${prod.id}</p></td>
                            <td><p>${prod.nombre}</p></td>
                            <td><p>$ ${prod.importe}</p></td>
                            <!--td><p><strong>Cantidad: ${prod.cantidad}</strong></p></td-->
                            <td><p><button class="card-button button btn btn-primary" ><i class="fa-regular fa-trash-can remove" data-id="${prod.nombre}"></i></button></p></td>
                            <!--td><p><a href="#" class="buttonCart" ><i class="fa-regular fa-plus" data-id="${prod.nombre}"></i></a></p></td-->
                        </tr>`
                        tabla.innerHTML += fila
        });
}
recuperoCarrito()

