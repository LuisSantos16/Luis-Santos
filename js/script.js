
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

//mostrar hora & fecha
function mostrarHoraFecha() {
    var ahora = new Date();
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
    var dia = ahora.getDate();
    var mes = ahora.getMonth() + 1;
    var año = ahora.getFullYear();

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    var horaFechaString = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;

    document.getElementById('horaFecha').innerHTML = horaFechaString;
  }

  setInterval(mostrarHoraFecha, 1000);

  mostrarHoraFecha();