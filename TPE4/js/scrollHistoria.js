"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){

    let imagen1 = document.getElementById("imagen1");
    let imagen2 = document.getElementById("imagen2");  
    let imagen3 = document.getElementById("imagen3");
    let texto1 = document.getElementById("texto1");
    let texto2 = document.getElementById("texto2");
    let texto3 = document.getElementById("texto3");

    function cambiarImagen(){
        let scrollTop = document.documentElement.scrollTop;
        let posicionTexto1 = texto1.offsetTop;
        let alturaTexto1 = texto1.clientHeight;
        //console.log("posDIV: "+ posicionDivHistoria);
        //console.log("Scroll: "+ scrollTop);
        //console.log("Altura ventana: "+ alturaVentana);
        //console.log("Texto 1: "+ posicionTexto1);
        //console.log("Altura texto 1: "+ alturaTexto1);

        //Pongo la imagen 1 y su texto
        if(scrollTop<posicionTexto1+alturaTexto1/2){
            imagen1.classList.remove("ocultar");
            imagen2.classList.add("ocultar");
            imagen3.classList.add("ocultar");
            texto1.classList.remove("ocultarTexto");
            texto2.classList.add("ocultarTexto");
            //texto3.classList.add("ocultarTexto");
        }

        //Pongo la imagen 2 y su texto
        if(scrollTop>posicionTexto1+alturaTexto1/2 && scrollTop<posicionTexto1+alturaTexto1+alturaTexto1/2){
            imagen1.classList.add("ocultar");
            imagen2.classList.remove("ocultar");
            imagen3.classList.add("ocultar");
            texto1.classList.add("ocultarTexto");
            texto2.classList.remove("ocultarTexto");
            texto3.classList.add("ocultarTexto");
        }

        //Pongo la imagen 3 y su texto
        if(scrollTop>posicionTexto1+alturaTexto1+alturaTexto1/2){
            imagen1.classList.add("ocultar");
            imagen2.classList.add("ocultar");
            imagen3.classList.remove("ocultar");
            texto2.classList.add("ocultarTexto");
            texto3.classList.remove("ocultarTexto");
        }
    }

    window.addEventListener("scroll", function(){
        cambiarImagen();
    });
}