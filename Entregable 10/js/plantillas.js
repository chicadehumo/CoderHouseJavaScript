const mostrarError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <img src="images/svg/recycle.svg">
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const mostrarCard = (contenido)=> {
    const {id, varietal, nombre, categoria, imagen} = contenido
    return `<div>
                <div class="card">
                    <img src="${imagen}" class="card-img-top w-100" alt="${nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                        <div class="btn-group">
                            <a class="btn btn-outline-dark" href="${urlVer}" title="${nombre}">Ver</a>
                            <a id="btn${id}" class="button btn btn-secondary" title="Agregar al carrito">Comprar</a>
                        </div>
                    </div>
                </div>    
            </div>`
}