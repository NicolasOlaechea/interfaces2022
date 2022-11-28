"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){

    let titulosCards = document.querySelectorAll(".titulo_personaje");
    let titulo = document.getElementById("divContenidoTituloPersonajes");
    console.log(titulosCards);
    function ubicarTitulos(){
        let alturaVentana = window.innerHeight;
        let scrollTop = document.documentElement.scrollTop;
        let posicionCarrusel = document.querySelector(".seccionPersonajesCarrusel").offsetTop;
        console.log(posicionCarrusel);
        console.log(scrollTop);
        //let alturaTexto1 = texto1.clientHeight;
        if(posicionCarrusel-alturaVentana/2 < scrollTop){
            for(let i=0; i<titulosCards.length; i++){
                titulo.classList.remove("restaurarTituloSeccionPersonajes");
                titulosCards[i].classList.remove("_titulo");
                titulosCards[i].classList.remove("restaurarTitulos");
                titulosCards[i].classList.add("subirTitulos");
                titulo.classList.remove("subirTituloSeccionPersonajes");
                titulo.classList.add("bajarTituloSeccionPersonajes");
                
            }
        }
        if(posicionCarrusel+100 < scrollTop){
            for(let i=0; i<titulosCards.length; i++){
                titulosCards[i].classList.remove("subirTitulos");
                titulosCards[i].classList.add("restaurarTitulos");
                titulo.classList.remove("bajarTituloSeccionPersonajes");
                titulo.classList.add("subirTituloSeccionPersonajes");
            }
        }
        if((posicionCarrusel-alturaVentana/2)-100 > scrollTop){
            for(let i=0; i<titulosCards.length; i++){
                if(titulosCards[i].classList.contains("subirTitulos")){
                    titulosCards[i].classList.remove("subirTitulos");
                    titulosCards[i].classList.add("restaurarTitulos");
                    titulo.classList.remove("bajarTituloSeccionPersonajes");
                    titulo.classList.add("restaurarTituloSeccionPersonajes");
                
                }
            }
        }
    }

    window.addEventListener("scroll", function(){
        ubicarTitulos();
    });
}