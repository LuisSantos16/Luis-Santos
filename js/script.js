
//menu
let prevScrollPos = window.pageYOffset;

function llamar() {
    let menudespegable = document.getElementById("listaid");
    menudespegable.classList.toggle("lista-open");
}

function cerrarMenu() {
    let menudespegable = document.getElementById("listaid");
    menudespegable.classList.remove("lista-open");
}

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let menudespegable = document.getElementById("listaid");

    // Verifica la dirección del scroll
    if (prevScrollPos > currentScrollPos && menudespegable.classList.contains("lista-open")) {
        // Muestra el menú si el scroll es hacia arriba y el menú está abierto
        menudespegable.classList.add("lista-open");
    } else {
        // Oculta el menú si el scroll es hacia abajo
        menudespegable.classList.remove("lista-open");
    }

    prevScrollPos = currentScrollPos;
};