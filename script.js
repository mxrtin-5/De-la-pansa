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

function mostrarCards(tipo) {
    const productosFiltrados = misHamburguesas.filter(producto => producto.tipo === tipo)
    shop.innerHTML = ''
    productosFiltrados.forEach((producto) => {
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


hamburguesas.addEventListener('click', () => {
    mostrarCards('hamburguesa')
});

extras.addEventListener('click', () => {
    
});

acompa.addEventListener('click', () => {
    mostrarCards('acompañamiento');
});

veggies.addEventListener('click', () => {
    mostrarCards('veggie');
});

cervezas.addEventListener('click', () => {
    mostrarCards('cerveza');
});

bebidas.addEventListener('click', () => {
    
});

