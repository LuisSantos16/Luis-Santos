// Elimina el fragmento de la URL sin recargar la página
function handlePopState() {
    history.replaceState(null, null, window.location.pathname);
}
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('DOMContentLoaded', handlePopState);
    
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

    if (prevScrollPos > currentScrollPos && menudespegable.classList.contains("lista-open")) {
        menudespegable.classList.add("lista-open");
    } else {
        menudespegable.classList.remove("lista-open");
    }

    prevScrollPos = currentScrollPos;
};

//scroll
window.addEventListener("scroll",Scroll);
function Scroll(){
    let header=document.getElementById("header");
    let posy=window.pageYOffset;
    if (posy>50){
        header.style.background="var(--bg-primary)";
        header.style.transition="var(--transition)"
        header.style.boxShadow="1px 1px 2px 2px var(--bg-light-transp)";
    }
    else{
        header.style.background="none";
        header.style.transition="var(--transition)";
        header.style.boxShadow="none"
    }
}