document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}


                            //Buscador de contenido

//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

/*Script - Load more*/
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () =>{

    let boxes = [...document.querySelectorAll('.products-content .article-all-products')];
    //CARGAR PRODUCTOS DE 4 EN 4, SI SE SELECCIONO MENOS, SE MOSTRARA LOS SELECCIONADOS
    for(var i = currentItem; i< currentItem + 4; i++){
        boxes[i].style.display = 'inline-block';
    }

    currentItem +=4;
    if(currentItem >=boxes.length){
        loadMoreBtn.style.display = 'none'
    }
}


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
        <td class="td-content">
            <img src="${elemento.imagen}" width=50/>
        </td>
        <td class="td-content td-content-title">
            ${elemento.titulo}
        </td>
        <td class="td-content">
            ${elemento.precio}
        </td>
        <td class="td-content">
            <a href="#" class="delete" data-id="${elemento.id}">x</a>
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        elemento=e.target.parentElement.parentElement;
        elementoId=elemento.querySelector('.delete').getAttribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    return false;
}


//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";
}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }
    }
}

/*Parallax Effect*/
window.addEventListener(("scroll"),()=>{
    document.querySelector("#logo").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#text").style.marginTop = `${window.scrollY * 1.5 + 60}px`
    document.querySelector("#middle-img").style.marginBottom = `-${window.scrollY * .3}px`
    document.querySelector("#left-img-1").style.marginLeft = `-${window.scrollY * .1}px`
    document.querySelector("#left-img-2").style.marginLeft = `-${window.scrollY  *.16}px`
    document.querySelector("#right-img-1").style.marginRight = `-${window.scrollY * .1}px`
    document.querySelector("#right-img-2").style.marginRight = `-${window.scrollY * .16}px`
})


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

