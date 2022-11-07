"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){

    let menuHamburguesa = document.querySelector("#menuHamburguesa");
    menuHamburguesa.addEventListener("click", mostrarMenuDesplegable);
    let cruz = document.querySelector("#cruz");
    cruz.addEventListener("click", ocultarMenuDesplegable);
    let fondoOscuro = document.querySelector("#fondoOscuro");

    function mostrarMenuDesplegable(){
        let menuDesplegable = document.querySelector("#menuDesplegable");    
        menuDesplegable.classList.remove("menuDesplegable");
        menuDesplegable.classList.add("mostrarMenuDesplegable");
        menuHamburguesa.classList.add("ocultarLogoMenuHamburguesa"); 
        fondoOscuro.classList.toggle("fondoOscuro");
        fondoOscuro.classList.toggle("fondoOscuroHide");
    }

    function ocultarMenuDesplegable(){
        let menuDesplegable = document.querySelector("#menuDesplegable");  
        menuDesplegable.classList.remove("mostrarMenuDesplegable");
        menuDesplegable.classList.add("menuDesplegable");
        menuHamburguesa.classList.remove("ocultarLogoMenuHamburguesa");
        fondoOscuro.classList.toggle("fondoOscuro");
        fondoOscuro.classList.toggle("fondoOscuroHide");
    }

    
}


