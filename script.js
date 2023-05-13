const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    navbar.classList.toggle('sticky', this.window.scrollY > 0)
})

/* seccion slider de opciones */

const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let x = 0;
let timer = 0;

prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateContainer();
})

nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateContainer();
})

function updateContainer() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x = x - 45;
        updateContainer();
    }, 4000);
}

updateContainer();

/* seccion implementacion de productos */

const hamburguesas = document.getElementById('hamburguesas');
const extras = document.getElementById('extras');
const acompa = document.getElementById('acompa');
const veggies = document.getElementById('veggies');
const cervezas = document.getElementById('cervezas');
const bebidas = document.getElementById('bebidas');
const shop = document.querySelector('.shop-content');

function carne() {
    shop.innerHTML = ''
    misHamburguesas.forEach((producto) => {
        const divProducto = document.createElement('div');
        divProducto.className = 'shop-content';
        divProducto.innerHTML = `
        <div class="products">
        <div class="row">
            <img src="img/${producto.id}.jpg" alt="">
            <div class="price">
                <h4>${producto.nombre}</h4>
                <h5>${producto.descripcion}</h5>
                <p>$${producto.precio}</p>
                <button>Compra</button>
            </div>
        </div>
        `
        shop.append(divProducto)
    })
}

function misExtras(){
    shop.innerHTML = ''
    extras.forEach((product)=>{
        const divExtras = document.createElement('div');
        divExtras.className = 'shop-content';
        divExtras.innerHTML = `
        <div class="products">
        <div class="row">
            <img src="img/${product.id}.jpg" alt="">
            <div class="price">
                <h4>${product.nombre}</h4>
                <h5>${product.descripcion}</h5>
                <p>$${product.precio}</p>
                <button>Compra</button>
            </div>
        </div>
        `
        shop.append(divExtras);
    })
}

hamburguesas.addEventListener('click', () => {
    carne()
});

extras.addEventListener('click', () => {
    misExtras()
});

acompa.addEventListener('click', () => {
    misExtras()
});

veggies.addEventListener('click', () => {
    carne()
});

cervezas.addEventListener('click', () => {
    carne()
});

bebidas.addEventListener('click', () => {
    carne()
});

