"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    let navegacionBtn = document.querySelector("#navegacionBtn");
    let nosotrosBtn = document.querySelector("#nosotrosBtn");
    let ayudaBtn = document.querySelector("#ayudaBtn");
    let redesBtn = document.querySelector("#redesBtn");


    navegacionBtn.addEventListener("click", toggleNavegacion);
    nosotrosBtn.addEventListener("click", toggleNosotros);
    ayudaBtn.addEventListener("click", toggleAyuda);
    redesBtn.addEventListener("click", toggleRedes);

    function toggleNavegacion(){
        let flecha = document.querySelector("#flechaNavegacion");
        let enlacesNavegacion = document.querySelector("#enlacesNavegacion");

        flecha.classList.toggle('dropdownActivo');
        enlacesNavegacion.classList.toggle('enlacesOcultos');
    }

    function toggleNosotros(){
        let flecha = document.querySelector("#flechaNosotros");
        let enlacesNosotros = document.querySelector("#enlacesNosotros");
        flecha.classList.toggle('dropdownActivo');
        enlacesNosotros.classList.toggle('enlacesOcultos');
    }

    function toggleAyuda(){
        let flecha = document.querySelector("#flechaAyuda");
        let enlacesAyuda = document.querySelector("#enlacesAyuda");
        flecha.classList.toggle('dropdownActivo');
        enlacesAyuda.classList.toggle('enlacesOcultos');
    }

    function toggleRedes(){
        let flecha = document.querySelector("#flechaRedes");
        let enlacesRedes = document.querySelector("#enlacesRedes");
        flecha.classList.toggle('dropdownActivo');
        enlacesRedes.classList.toggle('enlacesOcultos');
    }
}