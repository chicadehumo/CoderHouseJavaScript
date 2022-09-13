/* [MRF 2022-07-03] products are created */
const Products = 
[
    {
        id: 0001,
        name: 'Salvia, sahumerio',
        category: 'HIERBAS',
        price: '199',
        description: 'Herraienta perfecta para realizar rituales de conexión, limpieza y protección energética.',
        image: 'images/sahumerios.jpg',
        urlVer: "tienda/productos/sahumerios/"
    },
    {
        id: 0002,
        name: 'Vela Soja, Luna Nueva',
        category: 'RITUALES',
        price: '249',
        description: 'Activa tus sentidos con herramientas para el alma amorosa',
        image: 'images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "tienda/productos/zafus-zabufon/"
    },
    {
        id: 0003,
        name: 'kit: Aura en equilibrio',
        category: 'RITUALES',
        price: '1999',
        description: 'Conecta con corazón de la Pachamama y enciende el poder de las plantas al danzar magia.',
        image: 'images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "tienda/productos/juego-basico-maceta-cemento/"
    },
    {
        id: 0004,
        name: 'Otoño en calma, sahumerio',
        category: 'HIERBAS',
        price: '219',
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: 'images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "tienda/productos/juego-basico-maceta-cemento/"
    },
    {
        id: 0005,
        name: 'Zafu y zabutón',
        category: 'YOGA',
        price: '409',
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: 'images/zafus_zabufon.jpg',
        urlVer: "tienda/productos/zafus-zabufon/index.html"
    },
    {
        id: 0006,
        name: 'Shampoo sólido | Cero caspa',
        category: 'CERO_WASTE',
        price: '45',
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: 'images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "tienda/productos/juego-basico-maceta-cemento/"
    },
    {
        id: 0007,
        name: 'Taller: Conectando con mi corazón',
        category: 'TALLER',
        price: '979',
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: 'images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "tienda/productos/juego-basico-maceta-cemento/"
    },
    {
        id: 0010,
        name: 'Taller: Tejiendo un Japamala',
        category: 'TALLER',
        price: '899',
        description: 'Activa tus sentidos con herramientas el alma amorosa',
        image: 'images/maceta_cemento_plastico_reciclado.jpg',
        urlVer: "tienda/productos/juego-basico-maceta-cemento/"
    }
]

const cart = [];

// every time a product is added the cart is updated - interaction with HTML
const updateCart = (cart) =>
{
    let cartContainer = document.querySelector('#cart');
    // Get the child element node
    let container = document.getElementById("cartContainer");
    if(container)
    {
        container.parentNode.removeChild(container);
    }
    let div = document.createElement('div');
    div.setAttribute('id','cartContainer');
    div.innerHTML += ` <h2>Carrito de compras</h2>`;
    for (const product of cart)
    {
        div.innerHTML += `
            <div class="cart-item">
                <h4>Producto: ${product.name}</h4>
                <h4>Precio por unidad: ${product.price}</h4>
                <h4>Cantidad: ${product.quantity}</h4>
            </div>
        `;
    }

    cartContainer.appendChild(div);
}

// click event is loaded to each button - events
const loadEvents = () =>
{
    let buttons = document.querySelectorAll('.button');
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=>{

            let found = cart.find(element => element.id == button.id);
            if(found)
            {
                // esta en el carrito
                found.quantity++;
            }
            else
            {
                let product = Products.find(element => element.id == button.id);
                if(product)
                {
                    let newProduct = {
                        id:product.id,
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                        quantity: 1,
                        urlVer: product.urlVer
                    }
                    cart.push(newProduct);
                }
            }

            updateCart(cart);
        })
    }
}

// dynamic loading of products - interaction with HTML
const loadProducts = (Products) =>
{
    let container = document.querySelector('#productsContainer');
    for (const product of Products)
    {
        let div = document.createElement('div');
        div.setAttribute('class', 'col-4');
        div.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top w-100" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="btn-group">
                        <a class="btn btn-outline-dark" href="${product.urlVer}" title="${product.name}">Ver</a>
                        <a id="${product.id}" href="#" class="button btn btn-secondary" title="Agregar al carrito">Comprar</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    }
    loadEvents();
}

loadProducts(Products);



