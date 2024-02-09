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