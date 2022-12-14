const Products = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];

const setQuantity = () =>
{
    const label = document.querySelector('#cart-quantity');
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    if(total > 0)
    {
        label.innerText = total;
    }
}

const notification = (text) =>
{
    Toastify({
        text: text,
        className: "info",
        style: {
          background: "#F2916D",
          color:"white"
        }
      }).showToast();
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
                localStorage.setItem('cart', JSON.stringify(cart));
                notification('Producto agregado con éxito!')
            }
            else
            {
                let product = Products.find(element => element.id == button.id);
                if(product)
                {
                    let newProduct = {
                        id:product.id,
                        name: product.name,
                        price: product.price,
                        category: product.category,
                        description: product.description,
                        image: product.image,
                        moreUrl: product.moreUrl,
                        quantity: 1
                    }
                    cart.push(newProduct);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    notification('Producto agregado con éxito!');
                }
            }
            setQuantity(cart);
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
        div.setAttribute('class', 'card');
        div.innerHTML = `
                    <img src="${product.image}" class="card-img-top w-100" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="btn-group">
                            <a class="btn btn-outline-dark" href="${product.moreUrl}" title="${product.name}">Ver</a>
                            <a id="${product.id}" class="button btn btn-secondary" title="Agregar al carrito">Comprar</a>
                        </div>
                    </div>
        `;
        container.appendChild(div);
    }
    loadEvents();
}

const getData = async () =>
{
    try
    {
        const response = await fetch('/bbdd/productos.json');
        const data = await response.json();
        loadProducts(data);
        Products.push(...data);
        setQuantity();
    }
    catch(e)
    {
        console.log(e);
    }
}

getData();
