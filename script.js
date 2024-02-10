/*Script nav indicator*/
const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

/*Script - Shopping-Cart*/
const carrito = document.getElementById('shopping-cart');
const elementos = document.querySelectorAll('.add-cart');
const lista = document.querySelector('#list-cart tbody');
const vaciarCarritoBtn = document.getElementById('empty-cart');

cargarEventoListeners();

function cargarEventoListeners(){
    elementos.forEach(elemento => {
        elemento.addEventListener('click', comprarElemento);
    });
    carrito.addEventListener('click', eliminarElemento)
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();

    if(e.target.classList.contains('add-cart')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const tituloElemento = elemento.querySelector('h4, h1, h3');
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: tituloElemento ? tituloElemento.textContent : 'Título no encontrado',
        precio: elemento.querySelector('.price').textContent,
        id: elemento.querySelector('.add-cart').getAttribute('data-id')
    };
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=50/>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento=e.target.parentElement.parentElement;
        elementoId=elemento.querySelector('.borrar').getAttribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    return false;
}


/*Script Slider Card*/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*Validación y error de formulario*/
function submitForm() {
    var emailInput = document.getElementById("emailInput").value;
    var acceptTerms = document.getElementById("acceptTerms").checked;
    
    var gmail = /@gmail\.com$/;
    var hotmail = /@hotmail\.com$/;
    
    if (emailInput && acceptTerms) {
        if (gmail.test(emailInput) || hotmail.test(emailInput)) {
            console.log("Correo electrónico válido: " + emailInput);
            console.log("Términos y condiciones aceptados");
        } else {
            alert("Por favor, ingrese un correo electrónico Gmail o Hotmail válido.");
        }
    } else {
        alert("Por favor, ingrese su correo electrónico y acepte los Términos y Condiciones.");
    }
}